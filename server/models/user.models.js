// Dependancies //
import { pool } from '../connection/connections';
import { compare, hash as _hash } from 'bcrypt';
// Functions //
function getUser(res, user) {
    pool(`SELECT * FROM user WHERE username = ?`, user.username, (err, results) => {
        compare(user.password, results[0].password, (err, same) => {
            if (err) {
                res.send(err);
            } 
            else if (same) {
                const logininfo = {
                    username: results[0].username,
                    first: results[0].first,
                    id: results[0].id

                }
                res.send(logininfo);
            }
            else {
                res.send("Username not found or password not matching");
            }
        })
    })
};
async function createNewUser(res, user) {
    let password = user.password
    const saltRounds = 10;
    const hashedPassword = await new Promise((resolve, reject) => {
        _hash(password, saltRounds, function (err, hash) {
            if (err) {
                reject(err)
            }
            else{
                resolve(hash)
            }
         });
    })
    let userToSave = {
        first: user.first,
        last: user.last,
        email: user.email,
        username: user.username,
        password: hashedPassword
    }
    if (user.username.length > 7 && user.password.length > 7) {
        pool('SELECT username FROM user WHERE username = ?', user.username, (err, results) => {
            if (err) {
                return res.send(err);
            }
            else if (results.length > 0) {
                return res.send("Username already in use");
            }
            pool(`INSERT INTO user SET ?`, userToSave, (err, results, field) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(results);
                }
            })
        })
    }
    else {
        return res.send("Bad credentials")
    }
}
// Exports //
export { createNewUser, getUser }
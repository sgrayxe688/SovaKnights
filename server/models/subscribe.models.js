import { pool } from '../connection/connections';
function addSubscription(res, subscribe) {
    pool.query(`SELECT * FROM subscribe WHERE userid = ?`, subscribe.userid, (err, results) => {
        if (err){
            res.send(err)
        }
        if (results[0]){
            res.send('You are Already Subscribed')
        }
        else{
            pool.query(`INSERT INTO subscribe SET ?`, subscribeToSave, (err, results, field) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send('Subscription status saved', results);
                }
            })
        }
    })
};
function deleteSubscription(res, subscribe){
    pool.query(`SELECT * FROM subscribe WHERE userid = ?`, subscribe.userid, (err, results) => {
        if (err){
            res.send(err)
        }
        if (!results[0]){
            res.send('You are Not Subscribed')
        }
        else{
            pool.query(`DELETE FROM income WHERE userid = ?`, subscribeToSave.userid, (err, results, field) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send('Subscription Status Deleted', results);
                }
            })
        }
    })
}
export {addSubscription, deleteSubscription} 
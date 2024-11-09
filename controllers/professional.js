/* *************************
 * Required resources
 * *************************/
const mongodb = require('../database/connect');

/* **************************
 * Get Data
 * **************************/
const getData = async (req, res, next) => {
    const db = mongodb.getDb();
    const result = await db.collection('lesson1').find().toArray();

        const data = result[0];

        
    
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    
};



module.exports = { getData };
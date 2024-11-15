/* *************************************
 * Required assets
 * *************************************/
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

/* *************************************
 * Initialize the Database
 * *************************************/
let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Db is already initialized');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.DATABASE_URL)
    .then((client) => {
        _db = client.db('CSE341');
        callback(null, _db);
    })
    .catch((err) => {
        callback(err);
    });
};

/* ****************************************
 * Get the database
 * ****************************************/
const getDb = () => {
    if(!_db) {
        throw Error('Db not initialized');
    }
    return _db
};

module.exports = { initDb, getDb };
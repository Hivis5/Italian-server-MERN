const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb+srv://Hivis:<password>@hitesh.fatyu.mongodb.net/test";
module.exports = { dbUrl, mongodb, MongoClient };

var express = require("express");
const { MongoClient, dbUrl, mongodb } = require("../dbConfig");
var router = express.Router();

/* GET users listing. */

router.get("/all", async (req, res) => {
  const client = await MongoClient.connect(dbUrl);
  try {
    const db = await client.db("food");
    let document = await db.collection("italianfood").find().toArray();

    res.json({
      message: "Recipes Fetched successfully",
      data: document,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Internal Server Error",
    });
  } finally {
    client.close();
  }
});

router.post("/create", async (req, res) => {
  const client = await MongoClient.connect(dbUrl);
  try {
    const db = await client.db("food");
    let document = await db.collection("italianfood").insertOne(req.body);

    res.json({
      message: "Recipe Uploded successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Internal Server Error",
    });
  } finally {
    client.close();
  }
});

module.exports = router;

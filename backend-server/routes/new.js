const express = require('express')
const router = express.Router()
const { musicCollection } = require('../config/dbConnect')


router.get('/', async (req, res) => {

    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log(insertResult);
    res.send(insertResult)

})


module.exports = router;



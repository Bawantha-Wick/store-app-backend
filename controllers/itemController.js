const Item = require('../models/item');

// to get all data from the item table
async function getAll(req, res, next) {
    try {
        // fetching data from the item table
        const allItems = await Item.find({}, { _id: 0 });

        res.status(200).send(allItems);
    } catch (error) {
        res.status(500).send("Please try again later");
    }
}

module.exports = {
    getAll
};
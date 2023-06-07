const Item = require('../models/item');

async function getAll(req, res, next) {
    try {
        const allItems = await Item.find({}, { _id: 0 });

        res.status(200).send(allItems);
    } catch (error) {
        res.status(500).send("Please try again later");
    }
}

module.exports = {
    getAll
};
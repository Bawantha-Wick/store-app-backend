const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true, unique: false },
        price: { type: Number, required: false, unique: false },
        image_url: { type: String, required: true, unique: false, default: 'nan' },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);



module.exports = mongoose.model('ItemSchema', ItemSchema);

const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    id: Number,
    car_name: String,
    car_brand: String,
    car_price: Number,
})

const CarModel = mongoose.model("car", CarSchema)
module.exports = CarModel
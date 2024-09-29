
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const CarModel = require('./models/Cars.js')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://admin:Jacky1423@cluster0.angemaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/carWebsite")

app.get('/getCars',async(req, res) => {
    const carData = CarModel.find();
})

const PORT = 5000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



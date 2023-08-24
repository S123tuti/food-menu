const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://stuti3007:w14E1dmx6wAE1h7i@cluster0.rrvbnsb.mongodb.net/food-menu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

const userController = require('./controllers/userController');
const hotelMenuController = require('./controllers/hotelMenuController');

app.post('/register', userController.registerUser);
app.post('/hotels/create', hotelMenuController.registerHotel);
app.get('/menu/:hotelName', hotelMenuController.getMenuByHotelName);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

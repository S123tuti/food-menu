const mongoose = require('mongoose');

const hotelMenuSchema = new mongoose.Schema({
    hotelName: { 
        type: String, 
        required: true 
    },
    menuItems: { 
        type: [String], 
        required: true 
    },
    
});

const HotelMenu = mongoose.model('HotelMenu', hotelMenuSchema);

module.exports = HotelMenu;

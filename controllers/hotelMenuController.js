const HotelMenu = require('../models/hotelMenu');


module.exports = {
    registerHotel: async (req, res) => {
        try {
            const newHotel = new Hotel(req.body);
            await newHotel.save();
            res.status(201).json({ message: 'Hotel registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while registering the hotel' });
        }
    }
};

module.exports = {
    getMenuByHotelName: async (req, res) => {
        try {
            const hotelName = req.params.hotelName;
            const menu = await HotelMenu.findOne({ hotelName });
            
            if (menu) {
                res.json(menu.menuItems);
            } else {
                res.status(404).json({ message: 'Hotel menu not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while fetching hotel menu' });
        }
    }
};

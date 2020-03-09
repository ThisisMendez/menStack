const { hotelSchema, validate } = require('../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const leHotel = await hotelSchema.find().sort('roomsBytype');
    res.send(leHotel);
})
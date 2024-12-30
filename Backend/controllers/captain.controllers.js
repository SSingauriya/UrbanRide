const captainSchema = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
  const errors = await validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const {fullname, email, password, vehicle} = req.body;
  
  const isCapatainAlreadyRegistered = await captainSchema.findOne({ email });
  if (isCapatainAlreadyRegistered) {
    return res.status(400).json({errors: [{msg: 'Captain already registered with this email'}]});
  }

  const hashedPassword = await captainSchema.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname : fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType
  });

  const token = captain.generateAuthToken();

  res.status(201).json({token, captain});
}   
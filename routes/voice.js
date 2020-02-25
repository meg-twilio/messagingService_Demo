const router = require('express').Router()
const ctrl = require('../controllers');

// Endpoint => '/api'

// API Routes
router.post('/call/:phoneNumber', ctrl.phoneNumbers.call);

module.exports = router;

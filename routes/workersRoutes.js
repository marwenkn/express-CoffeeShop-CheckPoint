const express = require('express')
const WorkerController = require('../controllers/workerController')

const router = express.Router()

router.get('/', WorkerController)

module.exports = router
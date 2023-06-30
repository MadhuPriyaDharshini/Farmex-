const router = require('express').Router();

const answerController = require("../controller/answercntrlr");

router.post('/answers',answerController.addAnswer);

router.post('/showAnswers' , answerController.displayAnswers);

module.exports = router;
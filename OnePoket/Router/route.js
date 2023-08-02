const express = require("express");
const {Task1, Task2, Task3} = require("../Controller/Tasks")

const router = express.Router();

router.route('/task1').get(Task1);
router.route('/task2').get(Task2);
router.route('/task3').get(Task3);

module.exports = router;
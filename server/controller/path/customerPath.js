const express = require('express');
const controller = require('../customerController');

const path = express.Router();

path.post("/createmember", controller.createMember);
path.get("/getallmembers", controller.getAllMembers);

module.exports = path;
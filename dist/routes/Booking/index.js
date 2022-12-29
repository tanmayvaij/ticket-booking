"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const router = (0, express_1.Router)();
router.route("/fetchseats").get(controllers_1.handleFetchAvailableSeats);
router.route("/bookseats").get(controllers_1.handleBookSeats);
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SeatSchema = (0, mongoose_1.model)("seat", new mongoose_1.Schema({
    seatNo: {
        type: Number,
        required: true
    },
    isBooked: {
        type: Boolean,
        required: true
    }
}));

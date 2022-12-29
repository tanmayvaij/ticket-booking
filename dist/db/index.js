"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
(0, mongoose_1.set)('strictQuery', true);
const connectDB = () => {
    (0, mongoose_1.connect)(process.env.MONGO_URI, (err) => {
        if (err)
            throw err;
        console.log("Connected to database successfully");
    });
};
exports.connectDB = connectDB;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_1 = require("./db");
// importing all routers here
const Booking_1 = __importDefault(require("./routes/Booking"));
// enabled environment variables
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = (process.env.PORT || 5000);
// server configurations
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// using the routers
app.use("/api/booking", Booking_1.default);
// starting the application
const start = () => {
    try {
        // connecting to database
        (0, db_1.connectDB)();
        app.listen(PORT, () => {
            console.log("Server started successfully");
        });
    }
    catch (err) {
        console.log(err);
    }
};
start();

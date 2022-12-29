"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBookSeats = exports.handleFetchAvailableSeats = void 0;
const schema_1 = require("./schema");
const handleFetchAvailableSeats = async (req, res) => {
    const seats = await schema_1.SeatSchema.find({ isBooked: false }, { seatNo: 1, isBooked: 1, _id: 0 });
    const numberOfAvailableSeats = seats.length;
    res.json({ numberOfAvailableSeats, seats });
};
exports.handleFetchAvailableSeats = handleFetchAvailableSeats;
const handleBookSeats = async (req, res) => {
    const seatNo = Number(req.query.seatNo);
    const rec = await schema_1.SeatSchema.findOne({ seatNo });
    if (!rec?.isBooked) {
        await schema_1.SeatSchema.findOneAndUpdate({ seatNo }, { isBooked: true });
        return res.json({ status: true, msg: `Seat no ${seatNo} booked successfully.` });
    }
    res.json({ status: false, msg: `Sorry! seat no ${seatNo} is already booked.` });
};
exports.handleBookSeats = handleBookSeats;

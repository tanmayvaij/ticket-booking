import { Schema, model } from "mongoose"

export const SeatSchema  = model("seat", new Schema({

    seatNo: {
        type: Number,
        required: true
    },
    isBooked: {
        type: Boolean,
        required: true
    }
    
}))

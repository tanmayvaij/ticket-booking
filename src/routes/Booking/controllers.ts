import { Request, Response } from "express"
import { SeatSchema } from "./schema"


export const handleFetchAvailableSeats = async (req: Request, res: Response) => {
    
    const seats = await SeatSchema.find({ isBooked: false }, { seatNo: 1, isBooked: 1, _id: 0 })
    
    const numberOfAvailableSeats = seats.length
    
    res.json({ numberOfAvailableSeats, seats })

}


export const handleBookSeats = async (req: Request, res: Response) => {

    const seatNo = Number(req.query.seatNo)

    const rec = await SeatSchema.findOne({ seatNo })
   
    if (!rec?.isBooked) {

        await SeatSchema.findOneAndUpdate({ seatNo }, { isBooked: true })
        
        return res.json({ status: true, msg: `Seat no ${seatNo} booked successfully.` })

    }
    
    res.json({ status: false, msg: `Sorry! seat no ${seatNo} is already booked.` })
    
}

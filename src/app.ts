// importing libraries and dependencies
import express from "express"
import { config } from "dotenv"
import { connectDB } from "./db"


// importing all routers here
import BookingRouter from "./routes/Booking"


// enabled environment variables
config()


const app = express()
const PORT = ( process.env.PORT || 5000 ) as number


// server configurations
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// using the routers
app.use("/api/booking", BookingRouter)


// starting the application
const start = () => {

    try {

        // connecting to database
        connectDB()

        app.listen(PORT, () => {
            console.log("Server started successfully")
        })

    }

    catch(err) {
        console.log(err)
    }

}

start()

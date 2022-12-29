import { connect, set } from "mongoose"

set('strictQuery', true)

export const connectDB = () => {

    connect(process.env.MONGO_URI as string, (err) => {
        if (err) throw err
        console.log("Connected to database successfully")
    })

}

import { Router } from "express"
import { handleBookSeats, handleFetchAvailableSeats } from "./controllers"

const router = Router()

router.route("/fetchseats").get(handleFetchAvailableSeats)

router.route("/bookseats").get(handleBookSeats)

export default router

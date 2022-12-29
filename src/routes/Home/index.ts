import { Router } from "express"
import { handleHomePage } from "./controllers"

const router = Router()

router.route("/").get(handleHomePage)

export default router

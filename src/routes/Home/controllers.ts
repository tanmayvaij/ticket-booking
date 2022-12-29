import { Request, Response } from "express"
import { join } from "path"

export const handleHomePage = (req: Request, res: Response) => {

    res.sendFile(join(__dirname, "index.html"))

}

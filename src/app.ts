import express, { Request, Response, NextFunction } from "express"
import router from './routes'

const app = express()
app.use(router)
app.use(express.json())
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    res.status(500).json({ message: err.message })
})

export default app
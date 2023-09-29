import express from "express";
import cors from "cors";
import { routerEmail } from './routers/routerEmail.js'

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: {}}))

app.use('/email', routerEmail)

app.get('/' ,(req,res) => {
    res.json({ok: 'server working'})
})

import express from "express"
import { registration } from "../controller/authController"

const authRoutes = express.Router()

authRoutes.post("/registration", registration)
export default authRoutes
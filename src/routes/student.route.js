import express from 'express';
import { get, create, update, delet } from "../controller/student.controller.js";

export const studentRouter = express.Router()
studentRouter.get('/',get)
studentRouter.post('/',create)
studentRouter.put('/',update)
studentRouter.delete('/',delet)

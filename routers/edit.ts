import {Router} from "express";
import {TodoRecord} from "../records/todo/todo.record"
import * as path from "path";
import {updateRouter} from "./update";


const publicPath = path.join(__dirname, '../public');

export const editRouter = Router();
editRouter
    .post('/:id', async(req,res)=>{
        const todo = await TodoRecord.getOne(req.params.id)
        res.render('todo/listOne',{
            todo,
            style: '../style.css'
        })
    })







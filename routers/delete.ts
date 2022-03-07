import {Router} from "express"
import {TodoRecord} from "../records/todo/todo.record";



export const deleteRouter = Router();
deleteRouter

    .delete('/:id/', async(req,res)=>{
        const todoDelete = await TodoRecord.delete(req.params.id);
        console.log(todoDelete)
        res.redirect('/')
    })
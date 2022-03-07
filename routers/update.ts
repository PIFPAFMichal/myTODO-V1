import {Router} from "express"
import {TodoRecord} from "../records/todo/todo.record";



export const updateRouter = Router();
updateRouter
    .patch('/:id/', async(req,res)=>{
    const todo = await TodoRecord.getOne(req.params.id);
        const data = {
            id: req.params.id,
            ...req.body,
            task: req.body.taskTodo
        }

        console.log(todo, "updatee todo")
        const newTask = new TodoRecord(data)


        console.log(todo, 'tekst todo update')
        await newTask.update()
        // console.log(newTask, 'tekst zadania')
        res.render('todo/editedTask',{
            todo,
            newTask,
            // test,
            style: '../style.css'
        })
})
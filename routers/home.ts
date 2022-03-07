import {Router} from "express"
import {TodoRecord} from "../records/todo/todo.record";


export const homeRouter = Router();
homeRouter
    .get('/',async (req,res)=>{
        const todoList = await TodoRecord.listAll()

        res.render('home/home',{
            todoList,
            style: 'style.css'
        })
        // console.log(todoList)
    })
    .post('/add', async(req,res)=>{
        const data = {
            ...req.body,
            task: req.body.task
        }

        const newTask = new TodoRecord(data)
        await newTask.insert()
        // console.log(data)


        res.redirect('/')
    })

import {v4 as uuid} from 'uuid';
import {pool} from "../../utils/db";
import {FieldPacket} from "mysql2";

type TaskRecordResults = [TodoRecord[], FieldPacket[]]

export class TodoRecord{
    public id?: string;
    public taskTodo: string;
    constructor(obj: TodoRecord) {
    this.id = obj.id;
    this.taskTodo = obj.taskTodo
    }

    async insert():Promise <string>{
        if(!this.id){
            this.id = uuid()
        }
        await pool.execute("INSERT INTO `Task` VALUES(:id, :task)",{
            id: this.id,
            task: this.taskTodo,
        })
        return this.id
    }

    static async listAll(): Promise<TodoRecord[]>{
        const [results] = (await pool.execute("SELECT * FROM `Task`")) as TaskRecordResults;
        return results.map(obj=> new TodoRecord(obj));
    }

    static async getOne(id:string): Promise<TodoRecord>{
        const [result] = await pool.execute("SELECT * FROM `Task` WHERE `id`=:id",{
            id,
        }) as TaskRecordResults;

        return new TodoRecord(result[0])
    }

    async update():Promise <void> {
        await pool.execute("UPDATE `Task` SET `taskTodo` = :taskTodo WHERE `id` = :id", {
            taskTodo: this.taskTodo,
            id: this.id,
        });
    }

   static async delete(id: string): Promise <void> {
        await pool.execute("DELETE FROM `Task` WHERE `id` = :id",{
            id,
        })

    }

}
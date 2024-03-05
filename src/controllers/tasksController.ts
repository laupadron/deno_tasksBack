import {Request, Response} from 'npm:express';
import Task from '../models/tasksModel.ts'


export const getTasks = async (_req: Request,res:Response) =>{
    const tasks = await Task.find();
    res.json(tasks);
};

export const createTasks = async (req: Request,res:Response) =>{
    const newTask = await Task.create(req.body);
    res.json (newTask);
};

export const getOneTask = async (req: Request,res:Response) =>{
    const task = await Task.findById(req.params.id);
    res.json (task);
};

export const deleteTasks = async (req: Request,res:Response) =>{
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    res.json(deleteTask);
};

export const updateTasks = async (req: Request,res:Response) =>{
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    });
    return res.json(updateTask);
};
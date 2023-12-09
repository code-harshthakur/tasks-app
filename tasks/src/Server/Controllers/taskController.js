import Task, { find, findByIdAndUpdate, findByIdAndRemove } from '../Models/Task';

export async function getAllTasks(req, res) {
    const tasks = await find();
    res.json(tasks);
}

export async function addTask(req, res) {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
}

export async function updateTask(req, res) {
    const updatedTask = await findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    res.json(updatedTask);
}

export async function deleteTask(req, res) {
    await findByIdAndRemove(req.params.taskId);
    res.status(204).send();
}

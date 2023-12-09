import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    text: String,
    isCompleted: Boolean
});

export default model('Task', taskSchema);

// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.


import { useState } from "react";

export default function TaskForm({onTaskCreated}) {
    const [title, setTitle]=useState('');
    const [dueDate, setDueDate]= useState('');
    const [priority, setPriority]=useState('high');
    const [status, setStatus]=useState('To Do');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const newTask={title, dueDate, priority, status};
        try {
            await onTaskCreated(newTask);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>To Do list</h1>
            <form onSubmit={handleSubmit} id="1">
            <div>
                <label>Title:
                    <input type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} />
                </label>
                <label>
                    dueDate:
                    <input type="date"
                    value={dueDate}
                    onChange={(e)=>setDueDate(e.target.value)} />
                </label>
                <label>
                    Priority:
                    <select>
                        <option value={priority} onChange={(e)=>setPriority(e.target.value)}>High</option>
                        <option value={priority} onChange={(e)=>setPriority(e.target.value)}>Medium</option>
                        <option value={priority} onChange={(e)=>setPriority(e.target.value)}>Low</option>
                    </select>
                </label>
                <label>
                    status
                    <select>
                        <option value={status} onChange={(e)=>setStatus(e.target.value)}>To Do</option>
                        <option value={status} onChange={(e)=>setStatus(e.target.value)}>In Progress</option>
                        <option value={status} onChange={(e)=>setStatus(e.target.value)}>Done</option>
                    </select>
                </label>
            </div>
            <div>
                <button >Create Task</button>
            </div>
            </form>
        </div>
    );
}
import React, { useState } from 'react';

const TaskForm = ({ token, addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ title, description }),
        });
        const data = await response.json();
        if (response.ok) {
            addTask(data);
        } else {
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Task</h2>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;

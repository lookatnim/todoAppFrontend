import React, { useEffect, useState } from "react";
import { getToken } from "../session";
import  Axios  from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const [tasksResponse] = await Promise.all([
        Axios.get(process.env.REACT_APP_API_ENDPOINT + "tasks", {
        
          headers: { "Authorization": getToken() },
        }),
      ]);

      if (tasksResponse.status === 200) {
        setTasks(tasksResponse.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task._id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

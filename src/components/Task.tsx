import React from "react";
import { TaskArray, TaskContent } from "../react-app-env";
import { useMyState } from "../State";

export interface TaskProps {
  task: TaskContent;
}

const Task: React.FunctionComponent<TaskProps> = ({ task }) => {
  const { tasks, setTasks } = useMyState();

  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((item: TaskContent) => item.id !== id);
    setTasks(newTasks);
  };

  const handleUpdate = (id: number) => {
    let newTasks: TaskArray = [];
    tasks.map((task) => {
      if (task.id === id) task.done = !task.done;
      newTasks.push(task);
      setTasks(newTasks);
      return null;
    });
  };

  return (
    <div className="single-task">
      <div className="content-task">
        <h4 className={`font-title title-task ${task.done && "labeled"}`}>
          {task.title}
        </h4>
        <p className={`font-content task ${task.done && "labeled"}`}>
          {task.desc}
        </p>
      </div>
      <div className="actions">
        <div className="status-container font-content font-bold">
          <span
            className={`status ${task.done ? "done" : "pending"}`}
            onClick={() => handleUpdate(task.id)}
          >
            {task.done ? "DONE" : "PENDING"}
          </span>
        </div>
        <span
          className="btn-del"
          id="btn-del-task"
          onClick={() => handleDelete(task.id)}
        >
          🗑️
        </span>
      </div>
    </div>
  );
};

export default Task;

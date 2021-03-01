import React from "react";
import Task from "./Task";
import { useMyState } from "../State";

export interface TodoContentProps {}

const TodoContent: React.FunctionComponent<TodoContentProps> = () => {
  const { tasks } = useMyState();

  return (
    <>
      {/* Case that we dont have tasks */}
      {tasks.length === 0 && (
        <h2 className="title-no-tasks font-title">
          {" "}
          No tienes tareas pendientes! 🙌
        </h2>
      )}

      {/* Case to render tasks and length is more than one */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default TodoContent;

import React, { useState } from "react";
import Form from "./components/Form";
import ModalStart from "./components/ModalStart";
import NavBar from "./components/NavBar";
import TodoContent from "./components/TodoContent";
import { TaskArray } from "./react-app-env";
import { MyStateContext } from "./State";

const taskExample: TaskArray = [
  {
    id: Math.random(),
    title: "Example title",
    desc:
      "Description example for this example notes, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum purus diam. Fusce tempor justo eu tempor eleifend. Aenean quis elementum sem.",
    done: true,
  },
];

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const [modalAdder, setModalAdder] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskArray>(taskExample);
  const [modalStart, setModalStart] = useState<boolean>(true);

  return (
    <MyStateContext.Provider
      value={{
        modalAdder,
        setModalAdder,
        tasks,
        setTasks,
        modalStart,
        setModalStart,
      }}
    >
      <NavBar />
      <ModalStart />
      <div className="content-container">
        <Form />
        <section className="tasks tasks-pending">
          <TodoContent />
        </section>
      </div>
    </MyStateContext.Provider>
  );
};

export default App;

import { createContext, useContext } from "react";
import { TaskContent } from "./react-app-env";

export type State = {
  tasks: Array<TaskContent>;
  modalStart: boolean;
  modalAdder: boolean;
  setModalAdder: (val: boolean) => void;
  setTasks: (tasks: Array<TaskContent>) => void;
  setModalStart: (val: boolean) => void;
};

export const MyStateContext = createContext<State>({
  tasks: [],
  modalAdder: false,
  modalStart: true,
  setModalAdder: () => {},
  setTasks: () => {},
  setModalStart: () => {},
});

export const useMyState = () => useContext(MyStateContext);

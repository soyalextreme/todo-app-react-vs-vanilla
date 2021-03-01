import React from "react";
import { useMyState } from "../State";

export interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  const { setModalAdder, modalAdder } = useMyState();

  const setOpenModalAdder = () => setModalAdder(!modalAdder);

  return (
    <nav className="nav">
      <header>
        <h1 id="logo" className="font-title">
          Todo List! ✏
        </h1>
      </header>

      <ul>
        <li
          id="adder"
          className="font-content font-bold cursor-pointer add-task"
          onClick={setOpenModalAdder}
        >
          Add a task +
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

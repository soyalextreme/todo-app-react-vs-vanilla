import React, { useState } from "react";

export interface ModalStartProps {}

const ModalStart: React.FunctionComponent<ModalStartProps> = () => {
  const [visible, setVisible] = useState("initial");

  const clickHandle = () => {
    setVisible("none");
  };

  return (
    <div className="modal-container" style={{ display: visible }}>
      <section className="modal" id="pop-modal">
        <h2 className="font-title modal-title">Bienvenido! 👋</h2>
        <br />
        <p className="font-content font-bold modal-subtitle">
          Funcionalidades:
        </p>
        <br />
        <ul className="font-content modal-stats">
          <li>🔺 Poder crear tareas.</li>
          <li>🔺 Tareas que tengan un status.</li>
          <li>🔺 Eliminar tareas.</li>
        </ul>
        <br />
        <p
          className="font-content font-bold"
          id="btn-modal"
          onClick={clickHandle}
        >
          Continuar
        </p>
      </section>
    </div>
  );
};

export default ModalStart;

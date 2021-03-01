import React, { useState } from "react";
import { TaskContent } from "../react-app-env";
import { useMyState } from "../State";

export interface FormProps {}

const Form: React.FunctionComponent<FormProps> = () => {
  const { modalAdder, setModalAdder, setTasks, tasks } = useMyState();
  const [formInfo, setFormInfo] = useState({ title: "", desc: "" });

  const deactivate = () => setModalAdder(false);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFormInfo({
      ...formInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAdd = () => {
    if (formInfo.title.length === 0 || formInfo.desc.length === 0)
      return alert("Faltan campos por llenar");

    const newTask: TaskContent = {
      id: Math.random(),
      title: formInfo.title,
      desc: formInfo.desc,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setFormInfo({ title: "", desc: "" });
    setModalAdder(false);
  };

  return (
    <section
      className="form"
      style={{ display: `${modalAdder ? "flex" : "none"}` }}
    >
      <label className="font-title font-lg">Titulo:</label>
      <input
        className="font-content field"
        id="title-field"
        name="title"
        type="text"
        placeholder="Titulo a la tarea."
        onChange={handleChange}
        value={formInfo.title}
      />
      <label className="font-title font-lg">Descripcion:</label>
      <input
        className="font-content field"
        id="desc-field"
        name="desc"
        type="text"
        placeholder="Descripcion para la tarea."
        onChange={handleChange}
        value={formInfo.desc}
      />
      <div className="btn-form-container">
        <p className="btn-form font-content font-bold" onClick={handleAdd}>
          Agregar
        </p>
        <p
          className="btn-form-cancel font-content font-bold"
          onClick={deactivate}
        >
          Cancelar
        </p>
      </div>
    </section>
  );
};

export default Form;

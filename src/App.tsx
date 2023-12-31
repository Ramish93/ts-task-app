import React, { FC, useState, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    }
    setDeadLine(Number(e.target.value));
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadLine(0);
    console.log(todoList);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            value={task}
            type="text"
            placeholder="task..."
            name="task"
            onChange={handleChange}
          />
          <input
            value={deadline}
            type="number"
            name="deadline"
            placeholder="deadline in days"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;

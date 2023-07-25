import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setinputText] = useState("");

  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
      props.onAddTask(inputText);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isInputValid ? "invalid" : ""}`}>
        <label
        //style={{
        //  color: !isInputValid ? "red" : "black",
        //}}
        >
          Задачи
        </label>
        <input
          //style={{ borderColor: !isInputValid ? "red" : "black" }}
          type="text"
          onChange={taskInputChangeHandler}
        />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;

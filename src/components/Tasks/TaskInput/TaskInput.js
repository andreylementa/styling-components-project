import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) =>
      props.invalid ? "rgb(243, 157, 157)" : "transparent"};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }
`;

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
      {/*<div className={`form-control ${!isInputValid ? "invalid" : ""}`}>*/}
      <FormControl invalid={!isInputValid}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </FormControl>
      {/*</div>*/}
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;

import React, { useState } from "react";
import "./styles.css";
import {InputTodo} from './compornents/InputTodo'
import {IncompleteTodo} from './compornents/IncompleteTodo'
import { CompleteTodo } from "./compornents/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
  <>
    <InputTodo
      disabled={incompleteTodos.length >= 5}
      todoText={todoText}
      onChange={onChangeTodoText}
      onClick={onClickAdd}
    />
    {incompleteTodos.length >= 5 &&
      <p style={{color:'red'}}>
        登録できるTODOは5個までです。
      </p>
    }
    <IncompleteTodo
      todos={incompleteTodos}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    />
    <CompleteTodo
      todos={completeTodos}
      onClickBack={onClickBack}
    />
  </>
  );
}

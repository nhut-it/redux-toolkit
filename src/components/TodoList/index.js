import React from "react";
import { useSelector } from "react-redux";
import {
  todoListSelector,
  todosRemainingSelector,
} from "../../redux/selectors";
import Todo from "../Todo";

export default function TodoList() {
  const todoLists = useSelector(todosRemainingSelector);
  console.log({todoLists})
  const renderTodoList = () => {
    return todoLists.map((todoList) => {
      return (
        <Todo
          key={todoList.id}
          name={todoList.name}
          color={"red"}
          priority={todoList.priority}
          completed={todoList.completed}
          id={todoList.id}
        />
      );
    });
  };
  return (
    <div className="mb-5  max-h-32" style={{ overflow: "auto" }}>
      {renderTodoList()}
    </div>
  );
}

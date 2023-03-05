import { createSelector } from "@reduxjs/toolkit";
// export const todoListSelector=(state)=>{
//    const searchInput= searchFilterSelector(state)
//    console.log('searchInpput',searchInput)
//     return state.todoList.filter((todo)=>{
//         return todo.name.includes(searchInput)

//     })
// }

export const searchFilterSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const prioritySelector = (state) => state.filters.priority;
export const statusFilterSelector = (state) => state.filters.status;
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchFilterSelector,
  prioritySelector,
  statusFilterSelector,
  (todoList, searchInput, priority, status) => {
   
  //  console.log({todoList})
    return todoList.filter((todo) => {
      
      if (status === "all" || status === '') {
        return priority.length
          ? priority.includes(todo.priority) && todo.name.includes(searchInput)
          : todo.name.includes(searchInput);
      }
      return (
        todo.name.includes(searchInput) &&
        (status === "completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);

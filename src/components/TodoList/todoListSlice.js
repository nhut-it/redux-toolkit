import { createSlice } from "@reduxjs/toolkit";
import { ADD_TODO, TOGGLE_STATUS } from "../../redux/constants";

// ==========REDUX CORE================

// const initState = [
//   { id: 1, name: "learn js", completed: false, priority: "Medium" },
//   { id: 2, name: "learn reactjs", completed: true, priority: "Low" },
//   { id: 3, name: "learn css", completed: false, priority: "Hight" },
// ];
// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case TOGGLE_STATUS:
//       // console.log('actionToggle',action.payload)
//       const newState = [...state];
//       const indexTodo = state.findIndex((item) => {
//         return item.id === action.payload;
//       });
//       newState[indexTodo].completed = !state[indexTodo].completed;
//       // console.log(newState[indexTodo].completed);

//       return [...newState];

//       return;

//     default:
//       return state;
//   }
// };

//========== REDUX TOOLKIT========

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "learn js", completed: false, priority: "Medium" },
    { id: 2, name: "learn reactjs", completed: true, priority: "Low" },
    { id: 3, name: "learn css", completed: false, priority: "Hight" },
  ],
  reducers: {
    addTodo: (state, action) => {
      // mutation || IMMER
      state.push(action.payload);
    }, //=>{type:'todoList/addTodo'}
    toggleStatus: (state, action) => {
      const currentTodo=state.find((todo)=>{
        return todo.id===action.payload
      })
      currentTodo.completed=!currentTodo.completed
      console.log({currentTodo})
    },
  },
});
export default todoListSlice;
export const { addTodo, toggleStatus } = todoListSlice.actions;

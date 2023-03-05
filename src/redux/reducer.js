import filterReducer from "../components/Filters/filterSlice";
import todoListReducer from "../components/TodoList/todoListSlice";
import { combineReducers } from "redux";
// ----REDUX CORE

// const initState={
//     filters:{
//         search:'',
//         status:'',
//         priority:[]
//     }
//     ,
//     todoList:[
//         {id:1,name:'learn js',isCompleted:false,priority:'Medium'},
//         {id:2,name:'learn reactjs',isCompleted:true,priority:'Low'},
//         {id:3,name:'learn css',isCompleted:false,priority:'Hight'},
//     ]
// }

// const rootReducer = (state={}, action) => ({
//   filters: filterReducer(state.filters,action),
//   todoList: todoListReducer(state.todoList,action),
// });

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
  
});

export default rootReducer;

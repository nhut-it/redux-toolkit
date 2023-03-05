import { createSlice } from "@reduxjs/toolkit";
import { PRIORITY, SEARCH, STATUS } from "../../redux/constants";

// const initState = {
//   search: "",
//   status: "",
//   priority: [],
// };
// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case SEARCH:
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case STATUS:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case PRIORITY:
//       console.log("reducerPriority", action.payload);
//       return {
//         ...state,
//         priority: [...action.payload],
//       };
//     default:
//       return state;
//   }
// };

// =====REDUX TOOLKIT


const filterReducer=createSlice({
  name:'filters',
  initialState:{
      search: "",
      status: "",
      priority: [],
    },
  reducers:{
    searchChange:(state,action)=>{
      state.search=action.payload
    },
    statusChange:(state,action)=>{
      state.status=action.payload
    },
    priorityChange:(state,action)=>{
      console.log({action})
      state.priority=action.payload
    }
  }
})
export default filterReducer;
export const {searchChange,statusChange,priorityChange} =filterReducer.actions
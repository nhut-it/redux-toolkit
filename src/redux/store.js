

// ============REDUX CORE=====================

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filterSlice";
import todoListReducer from "../components/TodoList/todoListSlice";
// import {createStore} from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'


// const composeEnhancers=composeWithDevTools()
// const store= createStore(rootReducer,composeEnhancers)

// export default store

// ========================REDUX TOOLKIT=================


const store=configureStore({
    reducer:{
        filters: filterReducer.reducer,
        todoList: todoListReducer.reducer,
    }
})

export default store
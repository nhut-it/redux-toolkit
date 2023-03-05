import { ADD_TODO, PRIORITY, SEARCH, STATUS, TOGGLE_STATUS } from "./constants"

const addTodoAction=(data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}

export const filterSearchAction=(data)=>{
    return {
        type:SEARCH,
        payload:data
    }
}
export const filterPriotityAction=(data)=>{
    return {
        type:PRIORITY,
        payload:data
    }
}
export const filterStatusAction=(data)=>{
    return {
        type:STATUS,
        payload:data
    }
}
export const toggleCompleteAction=(id)=>{
    return {
        type:TOGGLE_STATUS,
        payload:id
    }
}

export default addTodoAction
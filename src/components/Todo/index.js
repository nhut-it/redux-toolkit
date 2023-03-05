import { Checkbox, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAction } from "../../redux/action";
import { toggleStatus } from "../TodoList/todoListSlice";

export default function Todo({ name, priority, completed,id }) {
  // console.log("completed", completed);
  const dispatch=useDispatch()
  const [checked, setChecked] = useState(completed);
  const color = {
    hight: "red",
    medium: "green",
    low: "gray",
  };

  
  const handelToggleCompleted=(e)=>{
   
    setChecked(e.target.checked);
    dispatch(toggleStatus(id))

  }
  return (
    <div>
      <div
        className={
          checked ? "flex justify-between mb-1 line-through opacity-50" : "flex justify-between mb-1"
        }
        // style={{ textDecoration: checked ? "line-through" : "none" }}
      >
        <Checkbox onClick={handelToggleCompleted}  checked={checked} >
          {name}
        </Checkbox>
        <Tag color={color[priority.toLowerCase()]} className="m-0">
          {priority}
        </Tag>
      </div>
    </div>
  );
}

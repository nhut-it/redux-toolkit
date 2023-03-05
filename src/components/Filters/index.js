import React, { useState } from "react";
import { Input, Radio, Select, Space, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  searchFilterSelector,
  prioritySelector,
  statusFilterSelector,
} from "../../redux/selectors";
import { priorityChange, searchChange, statusChange } from "./filterSlice";
// import {
//   filterPriotityAction,
//   filterSearchAction,
//   filterStatusAction,
// } from "../../redux/action";

const { Search } = Input;
const { Option } = Select;
export default function Filters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState([]);
  const dispatch = useDispatch();
  
  const handelSearchChange = (e) => {
    setSearch(e.target.value);
    
    dispatch(searchChange(e.target.value));
  };
  
  const handelStatusChange = (e) => {
    setStatus(e.target.value);
    
    dispatch(statusChange(e.target.value));
  };

  const handelPriorityChange = (e) => {
    
    setPriority(e)
    dispatch(priorityChange(e))
  };

  return (
    <div className="mt-5">
      <div className="mb-4">
        <label className="text-left">Search</label>
        <Search
          value={search}
          onChange={handelSearchChange}
          className="rounded-none mt-2"
          placeholder="input search text"
        />
      </div>
      <div className="mb-4">
        <label>Filter by status</label>
        <div className="mt-2">
          <Radio.Group  value={status} onChange={handelStatusChange}>
            <Radio value={"all"}>All</Radio>
            <Radio value={"completed"}>Completed</Radio>
            <Radio value={"todo"}>Todo</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="mb-4">
        <label>Filter by Priority</label>
        <Select
          value={priority}
          mode="multiple"
          className="w-full mt-2"
          onChange={handelPriorityChange}
          
        >
          <Option value="Hight" label="Hight">
            <Tag color="red" >Hight</Tag>
          </Option>
          <Option value="Medium" label="Medium">
            <Tag color="green">Medium</Tag>
          </Option>
          <Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Option>
        </Select>
      </div>
    </div>
  );
}

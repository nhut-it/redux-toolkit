import React from "react";
import { Input, Radio, Select, Space, Tag } from "antd";

const { Search } = Input;
const { Option } = Select;
export default function Filters() {
  return (
    <div className="mt-5">
      <div className="mb-4">
        <label className="text-left">Search</label>
        <Search className="rounded-none mt-2" placeholder="input search text" />
      </div>
      <div className="mb-4">
        <label>Filter by status</label>
        <div className="mt-2">
          <Radio.Group>
            <Radio value={1}>All</Radio>
            <Radio value={2}>Completed</Radio>
            <Radio value={3}>Todo</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="mb-4">
        <label>Filter by Priority</label>
        <Select
        
          mode="multiple"
          className="w-full mt-2"
          
          defaultValue={["hight"]}
        >
          <Option value="hight">
            <Tag color="red">hight</Tag>
          </Option>
          <Option value="medium">
            <Tag color="green">Medium</Tag>
          </Option>
          <Option value="low">
            <Tag color="gray">Low</Tag>
          </Option>
         
        </Select>
      </div>
    </div>
  );
}

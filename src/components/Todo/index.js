import { Checkbox, Tag } from "antd";
import React from "react";

export default function Todo(props) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <Checkbox>Checkbox</Checkbox>
        <Tag color={props.color} className="m-0">Hight</Tag>
      </div>
    </div>
  );
}

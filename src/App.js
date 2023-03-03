import { Button, Divider, Input, Select, Tag } from "antd";
import "./App.css";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
const { Option } = Select;
function App() {
  return (
    <div
      className="App
     text-black-300 py-2 font-semibold rounded-sm
     shadow-xl
    
     p-3 bg-white-200 
      max-w-md
      m-auto
      h-4/5
   
      mt-4
     "
    >
      <h1 className="my-4  text-center text-2xl">TODO APP with REDUX</h1>
      <Filters />
      <Divider />
      <TodoList />

      <Input.Group compact>
        <Input placeholder="add todo " style={{ width: "60%" }} />
        <Select
        

        className=""
        style={{width:'22%'}}
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
        <Button style={{ width: "18%" }} className="bg-blue-500 text-white ">
          Add
        </Button>
      </Input.Group>
    </div>
  );
}

export default App;

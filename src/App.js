import { Button, Divider, Input, Select, Tag } from "antd";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
// import addTodoAction from "./redux/action";
import { v4 as uuid } from "uuid";
import { todoListSelector } from "./redux/selectors";
import { addTodo } from "./components/TodoList/todoListSlice";
const { Option } = Select;
function App() {
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("Hight");
  const state = useSelector(todoListSelector);
  const inputRef=useRef()
  const dispatch = useDispatch();
  const handelInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handelChangePriority = (value) => {
    setPriority(value);
  };

  const handelAddTodo = () => {
    if(inputText.trim()!=''){
      dispatch(
        addTodo({
          id: uuid(),
          name: inputText,
          completed: false,
          priority,
        })
      );

      setInputText("");
    }
    else{
      inputRef.current.focus()
      console.log({inputRef})
    }
  };
  // console.log({ id: uuid(), name: inputText, completed: false, priority });
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
        <Input
          value={inputText}
          onChange={handelInputChange}
          placeholder="add todo "
          style={{ width: "60%" }}
          ref={inputRef}
        />

        <Select
          value={priority}
          onChange={handelChangePriority}
          defaultValue="Hight"
          style={{ width: "22%" }}
        >
          <Option value="Hight">
            <Tag color="red">Hight</Tag>
          </Option>
          <Option value="Medium">
            <Tag color="green">Medium</Tag>
          </Option>
          <Option value="Low">
            <Tag color="gray">Low</Tag>
          </Option>
        </Select>
        <Button
          onClick={handelAddTodo}
          style={{ width: "18%" }}
          className="bg-blue-500 text-white "
        >
          Add
        </Button>
      </Input.Group>
    </div>
  );
}

export default App;

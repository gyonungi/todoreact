import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../../store/actions/creators/todo';
import { deleteTodo } from "../../store/actions/creators/todo";
import { editStatus } from "../../store/actions/creators/todo";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  

  const dispatch = useDispatch();

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };


  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  } 

  const handledeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    setValue("");
  } 

  const handlestatusTodo = (id) => {
    dispatch(editStatus(id));
    setValue("");
  } 


  
  return (
    <div>
      <input type="text"  value={value} onChange={onInputChange} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add todo
      </button>
      <button className="remove-todo" onClick={handledeleteTodo} >
       Remove todo
      </button>
      <button className="status-todo" onClick={handlestatusTodo} >
       filter todo
      </button>
    </div>
  );
};

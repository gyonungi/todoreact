import { useSelector } from "react-redux";

import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";


export const TodoList = () => {
    const todos = useSelector((store) => todosSelector(store));
  
  
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} completed={!todo.completed} todo={todo} />
      ))}
      
    </ul>
  );
};
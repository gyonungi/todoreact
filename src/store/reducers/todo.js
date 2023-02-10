import { ADD_TODO, TOGGLE_TODO, DELETE_TODO,FILTER_TODO } from "../actions/types/todo";

// 1.
export const initialState = {
  taskList: [
    {
      id: 1,
      value: "first task",
      completed: true,
    },
    {
      id: 2,
      value: "two task",
      completed: true,
    },
    {
      id: 3,
      value: "three task",
      completed: false,
    }
  ],
};


// 2.
export default function todoReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TODO: {
 

  

      return {
        ...state,

        taskList: [...state.taskList,action.payload],
      
      };
    }

    case TOGGLE_TODO: {
      
      const stateCopy = JSON.parse(JSON.stringify(state));

       const targetTodoIndex = stateCopy.taskList.findIndex(
        (item) => item.id === action.payload.id
      );
      stateCopy.taskList[targetTodoIndex].completed =
        !stateCopy.taskList[targetTodoIndex].completed;
      return {
        ...stateCopy,

    }
  }
    case DELETE_TODO:
      
    return state.taskList.filter(item => item.id !== action.payload.id);


      case FILTER_TODO: {
        return {
            ...state,
            taskList: state.taskList.filter((item) => !item.completed)
        }
      }
    default:
      return state;
  }
}

  

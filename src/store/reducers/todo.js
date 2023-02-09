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
    // 3.
    case ADD_TODO: {
      // 4.

      // 5.
      return {
        ...state,

        taskList: [...state.taskList],
      
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

  

      return {
        ...state,

      };

    }

    case DELETE_TODO:
      
      return {
        ...state, 
        taskList: state.taskList.filter((item) => !item.id)
      };


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

  

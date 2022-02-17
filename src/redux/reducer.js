import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, CLEAR_LIST } from './actionTypes';

const INITIAL_STATE = {
  todoList: []
};

/**
 * 
 * @param {object} state 
 * @param {object} action 
 * 
 * handles the users location in state
 */

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Add an item to the todo list
    case ADD_ITEM:
      return {
        ...state,
        todoList: [
            ...state.todoList,
            action.payload
        ]
      }
    // Remove an item from the todo list
    case REMOVE_ITEM:
      const removeTodoList = state.todoList.filter((listItem) => listItem.id !== action.payload.id)
      return {
        ...state,
        todoList: [
          ...removeTodoList
        ]
      }
    // Modify an item in the todo list
    case UPDATE_ITEM:
      const updateTodoList = state.todoList.filter((listItem) => listItem.id !== action.payload.id)
      return {
        ...state,
        todoList: [
          ...updateTodoList,
          action.payload
        ]
      }
    /// Remove all items from the todo list
    case CLEAR_LIST:
      return {
        ...state,
        todoList: []
      }
    default:
      return state
  };
}

export default reducer;

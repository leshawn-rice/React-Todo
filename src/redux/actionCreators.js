import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, CLEAR_LIST, SHOW_ERROR } from './actionTypes';

const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item
  }
}

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item
  }
}

const clearList = () => {
  return {
    type: CLEAR_LIST,
    payload: {}
  }
}

const showError = (err) => {
  return {
    type: SHOW_ERROR,
    payload: err
  }
}

export {
  removeItem,
  addItem,
  updateItem,
  clearList,
  showError
}

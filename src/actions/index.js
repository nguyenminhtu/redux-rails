import axios from 'axios';

import {
  ADD_TODO, REMOVE_TODO,
  FETCH_TODOS_SUCCESS, FETCH_TODOS,
  EDIT_TODO, FETCH_TODO
} from '../constants/todosType';

const ROOT_URL = 'http://localhost:5000';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text
  }
}

export function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  }
}

export function fetchTodoSuccess(todo) {
  return {
    type: FETCH_TODO,
    todo
  }
}

export function fetchTodos() {
  return dispatch => {
    axios.get(`${ROOT_URL}/todos`)
      .then(response => dispatch(fetchTodosSuccess(response.data)))
      .catch(error => console.log('ERROR: ', error))
  }
}

export function addTodoAsync(todo) {
  return dispatch => {
    axios.post(`${ROOT_URL}/todos`, todo)
      .then(response => dispatch(addTodo(response.data)))
      .catch(error => console.log('ERROR: ', error))
  }
}

export function removeTodoAsync(id) {
  return dispatch => {
    axios.delete(`${ROOT_URL}/todos/` + id)
      .then(response => dispatch(removeTodo(response.data.id)))
      .catch(error => console.log('ERROR: ', error))
  }
}

export function editTodoAsync(id, todo) {
  return dispatch => {
    axios.patch(`${ROOT_URL}/todos/` + id, todo)
      .then(response => dispatch(editTodo(id, response.data)))
      .catch(error => console.log('ERROR: ', error))
  }
}

export function fetchTodo(id) {
  return dispatch => {
    axios.get(`${ROOT_URL}/todos/` + id)
      .then(response => dispatch(fetchTodoSuccess(response.data)))
      .catch(error => console.log('ERROR: ', error))
  }
}

import {
  ADD_TODO, REMOVE_TODO, FETCH_TODOS_SUCCESS,
  EDIT_TODO, FETCH_TODO
} from '../constants/todosType';

const initialState = {
  all: [],
  todo: null
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TODOS_SUCCESS:
      return Object.assign({}, state, {
        all: action.todos
      })
    case FETCH_TODO:
      return Object.assign({}, state, {
        todo: action.todo
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        all: [action.todo, ...state.all]
      })
    case EDIT_TODO:
      return Object.assign([], state, [
        state.all.map(todo => {
          return todo.id === action.id ? {...todo, text: action.text} : todo;
        })
      ])
    case REMOVE_TODO:
      debugger
      return Object.assign({}, state, {
        all: state.all.filter(todo => todo.id !== action.id)
      })

    default:
      return state;
  }
}

export default todos;

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeTodoAsync, fetchTodos} from '../actions';
import {Link} from 'react-router';

class TodoList extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    const {todos, removeTodoAsync} = this.props;
    return (
      <div>
        {
          todos.map(todo => {
            return (
              <p key={todo.id}>
                <Link to={`/todos/` + todo.id}>{todo.text}</Link>
                <button
                  onClick={() => removeTodoAsync(todo.id)}
                >X</button>
              </p>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.all
  }
}

export default connect(mapStateToProps, {
  removeTodoAsync,
  fetchTodos
})(TodoList);

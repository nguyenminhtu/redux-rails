import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodo} from '../actions';

class TodoShow extends Component {
  componentWillMount() {
    debugger
    this.props.fetchTodo(this.props.params.id);
  }

  render() {
    if (!this.props.todo) {
      return <p>Loading...</p>;
    }
    return (
      <p>{this.props.todo.text}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todos.todo
  }
}

export default connect(mapStateToProps, {fetchTodo})(TodoShow);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodoAsync} from '../actions';

class TodoForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let todo = {};
    todo.text = this.refs.text.value;
    this.props.addTodoAsync(todo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          ref='text'
        />
        <button
          type='submit'
        >Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addTodoAsync
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoForm);

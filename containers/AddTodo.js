import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form className={`form-inline`} onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value));
        input.value = ''
      }}>
        <div className={`form-group`}>
        <input className={`form-control`} ref={node => input = node} />
        </div>
        <button className={`btn btn-primary`} style={{marginLeft:'3px'}} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)

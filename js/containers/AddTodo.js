import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Add from '../components/Add'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddClick: (text) => {
      dispatch(addTodo(text))
    }
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)

export default AddTodo
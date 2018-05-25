import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listTodos } from '../../actions/todo-actions'

class TodoIndex extends React.Component {
  componentDidMount() {
    this.props.listTodos({ token: this.props.auth.token })
  }


  render() {
    return (
      <h1>Todo Index</h1>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth, todos: state.todos })
const mapDispatchToProps = dispatch => bindActionCreators({ listTodos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoIndex)

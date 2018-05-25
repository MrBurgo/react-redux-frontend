import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth-actions'
import './header-container.css'

class Header extends React.Component {
  onLogoutClick = (event) => {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <div className="header-container">
        <a className="title" href="#title">Stupid To-Dos</a>
        { this.props.username !== null && <a href="#logout" onClick={this.onLogoutClick}>{`Logout ${this.props.username}`}</a>}
      </div>
    )
  }
}

const mapStateToProps = state => state.auth
const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)

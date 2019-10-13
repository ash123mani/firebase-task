import { connect } from 'react-redux'

import Nav from '../../components/Nav'
import { signOut, authAction } from '../../store/actions/authActions'

const mapDispatchToProps = dispatch => {
  return {
    signOut: _ => dispatch(signOut()),
    authAction: action => dispatch(authAction(action))
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.firebase.auth.uid ? true : false
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

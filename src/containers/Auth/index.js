import { connect } from 'react-redux'

import Auth from '../../components/Auth'
import { signUp, signIn } from '../../store/actions/authActions'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.firebase.auth.uid ? true : false,
    authAction: state.auth.authAction
  }
}
 

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
    signIn: credentials => dispatch(signIn(credentials)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

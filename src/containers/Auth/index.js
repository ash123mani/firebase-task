import { connect } from 'react-redux'

import Auth from '../../components/Auth'
import { signUp, signIn } from '../../store/actions/authActions'


const mapDispatchToProps = (dispatch) => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
    signIn: credentials => dispatch(signIn(credentials))
  }
}

export default connect(null, mapDispatchToProps)(Auth)

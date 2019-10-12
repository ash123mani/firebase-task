import { connect } from 'react-redux'

import ProtectedRoute from '../../components/ProtectedRoute'


const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.firebase.auth.uid ? true : false
  }
}

export default connect(mapStateToProps)(ProtectedRoute)

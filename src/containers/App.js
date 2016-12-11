/**
 * Created by asolorzano on 11/12/16.
 */
import App from '../components/App'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps)
    return {}
}


const mapDispatchToProps = (dispatch) => {
    return {}
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
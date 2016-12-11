/**
 * Created by asolorzano on 11/12/16.
 */
import {connect} from 'react-redux'
import Main from '../components/Main'
import {dispatchcambiar} from '../actions/App'

const mapStateToProps = (state)=>{
    return {
        logout: state.app.logout
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        cambiar: (estado)=>{
            dispatch(dispatchcambiar(estado))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)

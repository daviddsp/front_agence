/**
 * Created by asolorzano on 11/12/16.
 */
import {connect} from 'react-redux'
import Main from '../components/Main'
import {dispatchcambiar, loadConsultors} from '../actions/App'

const mapStateToProps = (state)=>{
    return {
        isLoading: state.app.isLoading,
        consultors: state.app.consultors
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        cambiar: (estado)=>{
            dispatch(dispatchcambiar(estado))
        },
        loadConsultors: () => {
        	dispatch(loadConsultors());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)

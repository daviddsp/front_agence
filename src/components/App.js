import React, {Component} from 'react'
import { Provider } from 'react-redux'
import Root from './Root'

export default class App extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const {store,history} = this.props
		return (
				<Provider store={store}>
					<Root history={history} />
				</Provider>
		)
	}
}


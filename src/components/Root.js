/**
 * Created by asolorzano on 11/12/16.
 */
import React, {Component} from 'react'
import {Router, Route, IndexRoute}  from 'react-router'
import MainContainer from '../containers/MainContainer'

export default class Root extends Component {
    render() {
        const {history} = this.props
        return (
            <Router history={history}>
                <Route path="/" component={MainContainer} />
                <Route path="/about" component={MainContainer} />
            </Router>
        )
    }
}


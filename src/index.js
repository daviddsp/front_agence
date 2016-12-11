import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import configStore from './store'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configStore({})
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
	<App store={store} history={history} />, document.getElementById('app'));

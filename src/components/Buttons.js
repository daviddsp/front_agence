import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {
    Button,
    IconButton
} from 'react-mdl';

export default class ButtonBox extends Component {
	constructor(props) {
		super(props);
	}

    _goTo() {
        browserHistory.push('/consultores/2007-01-31/2007-02-31/anapaula.chiodaro, carlos.arruda');
    }

	render() {
		return (
			<div>
                <div>
                    <Button raised ripple colored onClick={this._goTo}>
                        Relatorio
                    </Button>
                    <br/>
                    <br/>
                </div>

                <div>
                    <Button raised ripple accent>
                        Grafico
                    </Button>
                    <br/>
                    <br/>
                </div>

                <div>
                    <Button raised ripple colored>
                        Pizza
                    </Button>
                </div>
            </div>
		);
	}
}
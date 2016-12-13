import React, { Component } from 'react';
import {
    Button,
    IconButton
} from 'react-mdl';

export default class ButtonBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
                <div>
                    <Button raised ripple colored>
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
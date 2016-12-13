/**
 * Created by asolorzano on 11/12/16.
 */
import React, {Component} from 'react'
import {
    Layout,
    Button,
    IconButton,
    Grid,
    Cell
} from 'react-mdl'
import Buttons from './Buttons';
import DatePicker from 'react-datepicker';
import Consultores from './Consultores'
import Relatorios from './Relatorio';
import moment from 'moment';

moment.locale('es');

export default class Main extends Component {
    constructor(props){
        super(props)
        this._cambiar = this._cambiar.bind(this)
        this._changeDate = this._changeDate.bind(this);

        this.state = {
            startDate: moment()
        }
    }

    _changeDate(date) {
        console.log(date.format('YYYY/MM'))
        this.setState({
            startDate: date
        });
    }

    render() {
        const {children, loadConsultors, consultors} = this.props
        const {startDate} = this.state;
        return(

            <Layout>
                <div style={{width: '100%'}}>
                    <Grid>
                        <Cell col={10}>
                            <Grid>
                                <Cell col={12}>
                                <div>
                                    Periodo
                                </div>
                                    <DatePicker
                                        onChange={this._changeDate}
                                        placeholderText={'Desde'}
                                        locale={'es'}
                                        selected={startDate}
                                    />

                                    <DatePicker
                                        onChange={this._changeDate}
                                        placeholderText={'Hasta'}
                                    />
                                </Cell>
                            </Grid>

                            <Grid>
                                <Cell col={12}>
                                    <Consultores loadConsultors={loadConsultors} consultores={consultors} />
                                </Cell>
                            </Grid>
                        </Cell>

                        <Cell col={2}>
                            <Grid>
                                <Cell col={12}>
                                    <Buttons />
                                </Cell>
                            </Grid>
                        </Cell>
                    </Grid>
                </div>
                {children}
            </Layout>



        )
    }
    _cambiar(){
        const {cambiar, logout} = this.props
        cambiar(!logout)
    }
}

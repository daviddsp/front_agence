/**
 * Created by asolorzano on 11/12/16.
 */
import React, {Component} from 'react'
import {Layout, Button} from 'react-mdl'

export default class Main extends Component {
    constructor(props){
        super(props)
        this._cambiar = this._cambiar.bind(this)
    }
    render() {
        const {logout} = this.props
        return(
            <Layout>
            <h1>{logout + ''}</h1>
                <Button onClick={()=>{this._cambiar()}}>Despachar</Button>
            </Layout>

        )
    }
    _cambiar(){
        const {cambiar, logout} = this.props
        cambiar(!logout)
    }
}

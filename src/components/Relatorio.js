/**
 * Created by asolorzano on 11/12/16.
 */
import React, {Component} from 'react'
import { Layout,
    Button,
    Card,
    CardTitle,
    CardMenu,
    CardText,
    IconButton,
    CardActions,
    Grid,
    Cell,
    DataTable,
    TableHeader,
    Table
} from 'react-mdl'

export default class Consultores extends Component {
    constructor(props){
        super(props)
        this._cambiar = this._cambiar.bind(this)
    }
    render() {
        const {logout} = this.props
        return(
    <div>
        <Grid>
            <Cell col={12}>
            <Table
        style={{width: '100%'}}
        sortable
        shadow={0}
        rows={[
        {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
        {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
        {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
    ]}>
    <TableHeader
        name="material"
        sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
        tooltip="The amazing material name">Material
            </TableHeader>
            <TableHeader
        numeric
        name="quantity"
        tooltip="Number of materials">Quantity
            </TableHeader>
            <TableHeader
        numeric
        name="price"
        cellFormatter={(price) => `\$${price.toFixed(2)}`}
        tooltip="Price pet unit"
            >Price
            </TableHeader>
            </Table>
            </Cell>
        </Grid>
    </div>



    )
    }
    _cambiar(){
        const {cambiar, logout} = this.props
        cambiar(!logout)
    }
}


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
    Textfield,
    Drawer,
    Navigation,
    Content
} from 'react-mdl'

export default class Consultores extends Component {
    static propTypes = {
        consultores: React.PropTypes.array
    };

    static defaultProps = {
      consultores: []
    };

    constructor(props){
        super(props)
        this._cambiar = this._cambiar.bind(this)

        this._selectedThem = this._selectedThem.bind(this);
        this._fillArray = this._fillArray.bind(this);

        this.selected = [];

        this.state = {
            consultors: props.consultores,
            consultorSelected: [],
            loading: true
        };
    }

    _fillArray(ev) {
        const options = ev.target.options;
        const limit = ev.target.options.length;
        this.selected = [];

        for (var i = 0; i < limit; i++) {
            const option = options[i];
            if (option.selected) {
                this.selected.push(option);
            }
        }
    }

    _selectedThem(ev) {
        const selected = this.selected;
        if (selected && selected.length) {
            this.setState({
                consultorSelected: selected
            });
        }
    }

    componentDidMount() {
        const {loadConsultors} = this.props;

        try {
            loadConsultors()
        } catch(err) {
            console.error(err);
        }
    }

    render() {
        const {consultores} = this.props
        const {consultorSelected} = this.state;

        if (!consultores.length) {
            return (
                <div>
                    <h3>
                        Estamos cargando los consultores...
                    </h3>
                </div>
            );
        }

        return(
            <div style={{height: '300px', position: 'relative'}}>
                <Layout>
                    <div style={{width: '100%'}}>
                        <Grid>
                            <Cell col={4}>
                                <select multiple onChange={this._fillArray} >
                                    {consultores.map((consultor, index) => {
                                        return (
                                            <option key={'consultar-'+index}>
                                                {consultor.co_usuario}
                                            </option>
                                        );
                                    })}
                                </select>
                            </Cell>

                            <Cell col={2}>
                                <div>
                                    <Button onClick={this._selectedThem}>
                                        {'>>'}
                                    </Button>
                                </div>

                                <div>
                                    <Button>
                                        {'<<'}
                                    </Button>
                                </div>
                            </Cell>

                            <Cell col={4} style={{width:'200px'}}>
                                <select multiple onChange={this._fillArray} >
                                    {consultorSelected.map((list, index) => {
                                        return (
                                            <option key={index}>
                                                {list.text}
                                            </option>
                                        );
                                    })}
                                </select>
                                
                            </Cell>
                        </Grid>
                    </div>
                    <Content />
                </Layout>
            </div>
        )
    }
    _cambiar(){
        const {cambiar, logout} = this.props
        cambiar(!logout)
    }
}

import React from "react";

export default class Saudacao extends React.Component {

    constructor(props) {
        super(props);

        this.setTipo = this.setTipo.bind(this);
    }

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    setTipo(e) {
        this.setState({tipo: e.target.value});
    }

    setNome(e) {
        this.setState({nome: e.target.value});
    }

    render() {
        const {tipo, nome} = this.state;

        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input 
                    type="text" 
                    onChange={this.setTipo} 
                    placeholder="Tipo..." 
                    value={tipo}
                />
                <input 
                    type="text" 
                    onChange={e => this.setNome(e)} 
                    placeholder="Nome..." 
                    value={nome} 
                />
            </div>
        )
    }
}
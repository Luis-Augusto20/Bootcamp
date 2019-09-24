import React, {Component}from 'react';

class MeuBtn extends Component {
  render() {
    return <button onClick={() => this.props.change(this.props.text)}>{this.props.text}</button>
  }
}

class MeuTitulo extends Component {
  render(){
    return <h2>Vc clicou no {this.props.title}</h2>
  }
}
export default class App extends Component {
  // quanto eu quero ter status na aplicação cria o construtor
    constructor(props) {
      super(props);

      this.state = {
        btnAtual: ''
      }
    }

    handleChange = (nome) => {
      this.setState({
        btnAtual: nome
      })
    }

    render() {
      return(
        <>
        <MeuTitulo title={this.state.btnAtual}/>
        <MeuBtn change={this.handleChange} text="Botão0101" />
        <MeuBtn change={this.handleChange} text="Botão0202" />
        <MeuBtn change={this.handleChange} text="Botão 0303"/>
        </>
        ); 
    }
}

import React, { Component } from 'react';
import './App.css';

class Contador extends Component {
  state = {contador: this.props.contadorInicial};

  render(){
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 10000);

    return (
     <ContadorNumero number = {this.state.contador}/>
    );
  }
}

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.number}</span>
  }
}
class App extends Component {
  render(){
    return (
      <div className="App">
        <p> Mi first component with state</p>
        <Contador contadorInicial = {2}/>
      </div>
    );
  }
}

export default App;

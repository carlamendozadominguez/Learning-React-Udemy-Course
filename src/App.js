import React, {Component} from 'react';
import './App.css';
import FetchExample from './FetchExample'

class App extends Component {
  state = { mensajeInicial: 'Mensaje inicial'}

  handlerClick = () => {
    this.setState({ mensajeInicial: 'mensaje Cambiado'})
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  render() {
    console.log('Render')
    return (
      <div className="App">
       <h4>Montaje</h4>
       {this.state.mensajeInicial}
       <button onClick = {this.handlerClick}>Cambiar mensaje</button>
       <FetchExample></FetchExample>
      </div>
    );
  }
}

export default App;

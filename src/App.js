import React, {Component} from 'react';
import './App.css';

class App extends Component {

state = {
  mouseX: 0,
  mouseY: 0,
  inputName: '',
  inputTwitter: '@',
  inputTerms: true
}

  handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({ mouseX: clientX, mouseY: clientY}) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = (e) => {
    console.log('handleChange')
    console.log(e.target.checked)
    this.setState({ inputTerms: e.target.checked })
  }

  render() {
    return (
      <div className="App">
       <h3>Events</h3>
       <button onClick={() => alert('hi!')}>Click</button>
       <div
         onMouseMove = {this.handleMouseMove}
         style= {{border: '1px solid #000', marginTop: 10, padding: 10}}>
         <p>{this.state.mouseX} , {this.state.mouseY} </p>
         </div>
         <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='name'>Nombre: </label>
            <input
              id='name'
              name='userName'
              onChange={e => this.setState({ inputName: e.target.value })}
              placeholder='Introduce el nombre'
              ref={inputElement => this.inputName = inputElement}
              value={this.state.inputName} />
          </p>

          <p>
            <label htmlFor='twitter'>Twitter:</label>
            <input
              id='twitter'
              name='twitterAccount'
              onChange={e => this.setState({ inputTwitter: e.target.value })}
              placeholder='Introduce tu Twitter'
              value={this.state.inputTwitter} />
          </p>

          <p>
            <label>
              <input
                checked={this.state.inputTerms}
                onChange={this.handleChange}
                type='checkbox' />
              Accepted terms
            </label>
          </p>

          <button>Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;

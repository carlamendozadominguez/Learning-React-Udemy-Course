import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello (props){
//  return <h2>{props.title}</h2>
//}

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}


class Text extends Component {
  render() {
    const {
      isActivated,
      arrayOfNumbers,
      text,
      number, 
      objectWithInfo, 
      multiply,
      title
    } = this.props; //To delete the reference this.props in each varible 

    const activated = isActivated ? 'On' : 'Off';
    const mappedNumbers = arrayOfNumbers.map(multiply);
    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{activated}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}

Text.defaultProps = {
  text: 'Default Text'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props'/>
        <Text
          arrayOfNumbers = {[1, 2, 3]}
          multiply = { (number) => number * 3}
          objectWithInfo = {{key: 'First Value', key2: 'Second Value'}}
          isActivated
          number = {2}
          title = {<h1>Title</h1>}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

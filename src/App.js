import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './sections/conditional';
import cars from './data/cars.json'

class CarItem extends Component {
  render(){
    const {car} = this.props

    return (
      <li>
        <p><strong>Name:</strong> {car.name}</p>
        <p><strong>Company:</strong> {car.company}</p>
      </li>
      )
  }
}
class App extends Component {
  render(){
    const numbers = [1, 1, 2, 3, 4]
    return(
      <div className="App">
        <ConditionalSection />
        <h3>Working with Lists</h3>
        {
          numbers.map((number,index) => {
            return <p key = {index}> I'm the number {number}</p>
          })
        }

        <h3>Working with Lists of objects</h3>
        <ul>
        {
          cars.map((car) => {
            return <CarItem  key = {car.id} car = {car} />
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import React from 'react'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: '',
      favColor: 'blue'
    }
    this.handleChange = this.handleChange.bind(this)
}

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? this.setState({[name]: checked}) :this.setState({[name]: value})
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
        <input 
        type="text" 
        value = {this.state.firstName}
        name='firstName' 
        placeholder='First Name' 
        onChange={this.handleChange}/>
        <br />

        <input 
        type="text" 
        value = {this.state.lastName}
        name='lastName' 
        placeholder='Last Name' 
        onChange={this.handleChange}/>
        <br />

        <textarea 
        onChange={this.handleChange}
        value={'Some default value'}/>=

        <br />

        <label>
        <input 
            type="checkbox" 
            name='isFriendly'
            checked = {this.state.isFriendly}
            onChange = {this.handleChange}
            /> Is Friendly?
        </label>

        < br />

        <label>
        <input 
            type="radio" 
            name='gender'
            value = 'male'
            checked = {this.state.gender === 'male'}
            onChange = {this.handleChange}
            /> Male
        </label>

        <br />

        <label>
        <input 
            type="radio" 
            name='gender'
            value = 'female'
            checked = {this.state.gender === 'female'}
            onChange = {this.handleChange}
            /> Female
        </label>

        <br />
        
        <label>Favorite Color:
        <select 
        onChange={this.handleChange} 
        value={this.state.favColor}
        name="favColor">

          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
        </select>
        </label>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>You're favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    )

  }
}

export default App

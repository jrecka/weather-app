import React, {Component} from 'react'
import Form from './components/form/Form'
import Result from './components/result/Result';
import './App.css';

const apiKey = '93ff829608b842116f66ee2c07d4b476'
// const API = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
export default class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: ''
  }
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleCitySubmit = e => {
    e.preventDefault()
    const API = `api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${apiKey}&units=metric`

    fetch(API)
      .then(response => {
        if(response.ok) {
          return response
        }
        throw Error("Failed")
      })
      // .then(response => response.json())
      .then( response => {

        console.log(response)
      }
      
        
      )
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className='container mt-5'>
        <Form 
          value={this.state.value} 
          change={this.handleInputChange}
          submit={this.handleCitySubmit}/>
        <Result/>
      </div>
    )
  }
}


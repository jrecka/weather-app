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
    error: ''
  }
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleCitySubmit = e => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${apiKey}&units=metric`

    fetch(API)
      .then(response => {
        if(response.ok) {
          return response
        }
        throw Error("Failed")
      })
      
      .then(response => response.json())
      .then( data => {
        const time = new Date().toLocaleString()
        this.setState({
          error: false,
          date: time,
          city: data.name,
          sunrise: data.sys.sunrise ,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed
        })
      }
      
        
      )
      .catch(error => {
        this.setState(state => ({
          error: true,
          city: this.state.value
        }))
        console.log(error)
      })
  }
  render() {
    return (
      <div className='container mt-5'>
        <Form 
          value={this.state.value} 
          change={this.handleInputChange}
          submit={this.handleCitySubmit}/>
        <Result weather={this.state}/>
      </div>
    )
  }
}


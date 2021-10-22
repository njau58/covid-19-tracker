
import styles from  './App.module.css';
import {Cards, Chart, CountryPicker} from './components'
import {fetchGlobalData, fetchCountryDailyData} from './api'
import img from './images/image.png'



import React, { Component } from 'react'

export default class App extends Component {

  state = {
    data:{

    },
    country:''
  }

  async componentDidMount(){
    const response = await fetchGlobalData()

    this.setState({data:response})

  }

  handleCountryChange = async (country) => {
    const response = await fetchCountryDailyData(country)
   
    this.setState({data:response, country:country})
 
   
    

  }


  render() {
    return (
      <div className={styles.App}>
      
      <img  className={styles.image}alt='covid-19' src={img}></img>

      <Cards data={this.state.data}/>
      <CountryPicker  handleCountryChange={this.handleCountryChange}/>
  
      <Chart data={this.state.data} country={this.state.country}/>
   
      </div>
    );
  }
}


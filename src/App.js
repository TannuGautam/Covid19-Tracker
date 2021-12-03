import React from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import style from "./App.module.css";
import { fetchData } from './api';
import { useEffect, useState } from 'react';
import image from "./images/coronaImg.jpg"

const App = ({handleCountryChange}) => {

  const [data, setData ] = useState({});
  const [country,setCountry] = useState('');

  useEffect(() => {
    getFetchData();
  },[]);

  const getFetchData = async () => {
      const fetchedData = await fetchData();

      setData(fetchedData);

  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    setData(fetchedData,country)
    setCountry(country);
  }

  return (
    <div className = {style.container}>
      <img src= {image} className = {style.image} alt = ""/>
      <Cards data = {data}></Cards>
      <CountryPicker handleCountryChange = {handleCountryChange}></CountryPicker>
      <Chart data={data} country={country}></Chart>
    </div>
  )
}

export default App

import { useEffect } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import { useWeather } from './context/Weather'

function App() {
const weather = useWeather();
// console.log(weather)

  useEffect(()=>{
    //get current locationhere
    weather.fetchDataLocation();
  },[])

  return (
    <div className='app'>
      <h1> Weather App</h1>
      <div className='search-box'>
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
      </div>
      <Card />
      <div className='refresh-box'>
        <Button value="Refresh"  onClick={() => window.location.reload()}/>
      </div>
    </div>
  )
}

export default App

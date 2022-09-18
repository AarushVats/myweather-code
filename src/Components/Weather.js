import axios from 'axios';
import React, { useState } from 'react'
import News from './News';
import WeatherCard from './WeatherCard';

const weather = (props) => {
    const {apiKey} = props
    const [Location, setLocation] = useState('')
    const [data, setData] = useState([])
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${apiKey}&units=metric`
  
   const NewsKey ='f81ce4cb317b46b191c4b4e8a70e18a9'
    const fetchweather = (e) => {
        e.preventDefault();
        // using axios instead of fetch because of data 
         axios.get(url).then((response) => {
            setData(response.data)
            setLocation(Location)
        })

    }
    const handlechange = (e) => {
        setLocation(e.target.value)
    }
    console.log()
    // useEffect(() => {
    //     fetchweather()
    // }, [])
    const styleobj ={
        color:"white",
        fontSize:"30px"
    }
    return (
        <>
    <div className="my-2 container d-flex justify-content-center res" style={styleobj}>Search weather of any city from around the world</div>
        <div className='container bg-design1'>
           
            <form className="d-flex justify-content-center my-5" role="search">
                <input className="form-control me-2" type="search" placeholder="Search City" aria-label="Search" style={{ width: "30%" }}
                    name={Location}
                    value={Location}
                    onChange={handlechange}
                />
                
                <button className="btn btn-primary" type="submit" onClick={fetchweather}>Search</button>
            </form>
            {data.name && <WeatherCard name={data.name} temp={data.main?.temp} feels_temp={data.main?.feels_like} maxtemp={data.main?.temp_max} clouds={data.clouds?.all} humidity={data.main?.humidity} description={data.weather?.[0].description} pressure={data.main?.pressure} wind={data.wind?.speed} visibility={data.visibility} iconid={data.weather?.[0].icon} />}

            <News NewsKey={NewsKey}/>
        </div>
        </>
    )
}

export default weather

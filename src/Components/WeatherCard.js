import React from 'react'
import "./style.css";
const WeatherCard = (props) => {
  let { name, clouds, temp, wind, humidity, description, maxtemp, feels_temp, iconImg, pressure, visibility, iconid } = props;
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  return (

    <div>
      <div id="card">
        <div id="location"><h2>{name}</h2></div>
        <div id="moredata">
        {
              iconid &&
            <div className="icon"><img   src={`https://openweathermap.org/img/w/${iconid}.png`}/></div>}
          <div className="majordata">
            <p>Temperature : {temp}{'\u00b0'}C</p>
            <br />
            <p>Weather : {description} </p>
            <br />
            <p>Feels like : {feels_temp}{'\u00b0'}C</p>
            <br />
            <p>Max-temp : {maxtemp}{'\u00b0'}C</p>
          </div>
          <div className="minordata">
            <p>Humidity : {humidity} %</p>
            <br />
            <p>Pressure :{pressure} hPa</p>
            <br />
            <p>Visibilty : {visibility / 1000} km</p>
            <br />
            <p>Wind speed : {wind}m/sec</p>
          </div>
         
        </div>

      </div>
    </div>
  )
}

export default WeatherCard
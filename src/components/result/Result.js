const Result = ({weather}) => {
    const { date, city, sunrise, sunset, temp, pressure, wind, error} = weather
    let content = null

    if(!error && city) {
        const sunsetTime = new Date(sunset).toLocaleTimeString(),
        sunriseTime = new Date(sunrise).toLocaleTimeString()
        content = (
            <div className='result'>
                <h3>City: {city}</h3>
                <p>Date: {date}</p>
                <p>Sunset: {sunsetTime}</p>
                <p>Sunerise: {sunriseTime}</p>
                <p>Temperture: {temp} &#0176;C</p>
                <p>Pressure: {pressure} hPa</p>
                <p>Wind speed: {wind} m/s</p>
            </div>
        )
    }
    
    return(
        <div>{error ? `${city} not found` : content}</div>
    ) 
}
export default Result
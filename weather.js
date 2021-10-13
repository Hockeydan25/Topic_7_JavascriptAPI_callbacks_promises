
let tableElement =document.querySelector('#weather-forecast') //link to HTML page

let weatherApi = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

fetch(weatherApi)
    .then( response => response.json() )
    .then( (weatherJson) => {

          
    let periodsArray = weatherJson.properties.periods

        //console.log(periodsArray)
    periodsArray.forEach( (forecastPeriod) => {   
        console.log(forecastPeriod)
       
         let forecastRow = document.createElement('tr')
        // forecastRow.innerHTML = forecastPeriod.number
        tableElement.appendChild(forecastRow)
        
        let dayTableData = document.createElement('td')
        dayTableData.innerHTML = forecastPeriod.name
        forecastRow.appendChild(dayTableData)
        
        let temptureTableData = document.createElement('td')
        temptureTableData.innerHTML = forecastPeriod.temperature
        forecastRow.appendChild(temptureTableData)

        let imageIconUrl= forecastPeriod.icon
        let forecastIcon = document.createElement('img')
        forecastIcon.src = imageIconUrl        
        let iconTableData = document.createElement('td')
        iconTableData.appendChild(forecastIcon)
        forecastRow.appendChild(iconTableData)       

        let detailedForecast = document.createElement('td')
        detailedForecast.innerHTML = forecastPeriod.detailedForecast
        forecastRow.appendChild(detailedForecast)

    })     

})
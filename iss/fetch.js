let url = 'https://api.wheretheiss.at/v1/satellites/25544'
//getting our html links  
let issLat = document.querySelector('#iss-lat')
let issTime = document.querySelector('#time')
let issLong = document.querySelector('#iss-long')
let update =10000 // create variable for easier calls, faster to change and keeps it obvious.
let issMarker //we left this undefinded I don't have errors and I am not sure I can explain why is empty.
let myIcon = L.icon({
    iconUrl: 'sat.png', //file we are using is getting to get it from.
    iconSize: [55, 55], //size of the icon.
    iconAnchor: [25,25]  // where the image will center from on the marker location.
})
let map = L.map('iss-map').setView([0,0], 1) //map method needs the div from the html. no hashTag.
//tiles are also needed to create map background.
//L is our leaflet tile layer. A series of images. Note to contributors inportant here
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//add API 10 sec refresh.turn our fetch into a function. setInterval waits 10 seconds, repeated.
//json will extract the json information
iss() //
setInterval(iss, update) //variable in place of 10000 
function iss(){
    fetch(url).then( (res) => {  //function call return , then call will once it's loaded. promise
        return res.json() //second promise return resolved or failed 
    }).then( (issData) => {
        console.log(issData)//display data
        let lat = issData.latitude  //variable stores issData .latitude is requested, html span is also linked to this variable
        let long = issData.longitude
        issLat.innerHTML = lat  //javascript data displayed on page from array 
        issLong.innerHTML = long 
        
        //create marker is is it doesn exist falsy
        //create marker if it does exist
        if(!issMarker){ 
            //create marker
            issMarker = L.marker([lat, long], {icon: myIcon}).addTo(map)
        } else{
            issMarker.setLatLng([lat,long], {icon: myIcon})

        }
        let now = Date() //using date function to get date and time.
        issTime.innerHTML = `This data was fetched at : ${now}.`//note on page about string leteral
    }).catch( (err) => {
        console.log('ERROR!', err) //generic error handler. catched many eeerors, url error 
    })
}

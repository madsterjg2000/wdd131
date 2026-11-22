document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;


const temperature = 45;
const windSpeed = 9;

function calculateWindChill (temp,speed){
    return (35.74 +(0.6215 * temp)-(35.75* (speed ** 0.16))+(0.4275 * temp * (speed** 0.16))).toFixed(1)
} 

const windChillElement = document.getElementById("windchill");
if (temperature <= 50 && windSpeed > 3 ) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °f`;
} else{
    windChillelement.textContent= "N/A";}












const weather = new Weather('Japan','jp');
const ui = new UI();

document.addEventListener('DOMContentLoaded',getWeather);
document.addEventListener('DOMContentLoaded',getMain);

function getWeather(){
weather.getWeather()
   .then(result => {
    console.log(result);
      ui.paint(result);
      weather.paint(result);
     // ui.another(result);
   })
   .catch(err => console.log(err));
}
function getMain(){
  weather.getMain()
     .then(result => {
      console.log(result);
        //ui.paint(result);
        weather.paint(result);
       // ui.another(result);
     })
     .catch(err => console.log(err));
  }
class UI{
    constructor(){
        
        this.locate = document.getElementById('Location');
        this.humid = document.getElementById('humidity');
        this.Pressure = document.getElementById('pressure');
        this.descript = document.getElementById('temperature');
        this.max = document.getElementById('maximumtemp');
    }
    paint(main){
        //his.bgImg.setAttribute('src',weather[0].icon);
       // this.descript.textContent = weather[0].description;
        this.humid.textContent = `Humidity : ${main.humidity}`;
        this.descript.textContent = `Temperature : ${main.temp}`;
        this.Pressure.textContent = `Pressure : ${main.pressure}`;
        this.max.textContent = `Max Temperature : ${main.temp_max}`;
        
    }
}
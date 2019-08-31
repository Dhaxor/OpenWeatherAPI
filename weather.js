class Weather{

    constructor(city,acr){
       this.api_key = '29b25605178ac1bc5d95ae5dd0e23683';
       this.city = city;
       this.acr = acr;
       // Doing a little bit of the UI here because i need the this.city
       //for the location
      this.locate =document.getElementById('Location');
      this.bgImg = document.getElementById('weatherImage');
      this.Description = document.getElementById('description');

      // this.state = state;
    }


    async getWeather(){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.acr}&appid=${this.api_key}`);

      const responseData = await response.json();

      
      return responseData.main
    }
     
    async getMain(){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.acr}&appid=${this.api_key}`);

      const responseData = await response.json();

      
      return responseData.weather;
    }






    changeLocation(city,state){
        this.city = city;
        this.state = state;

    }

     paint(main){
       this.Description.textContent = `${main[0].description}`;
       //this.bgImg.setAttribute('src',main[0].icon);
      this.locate.textContent = `${this.city},${this.acr}`;
     }
}
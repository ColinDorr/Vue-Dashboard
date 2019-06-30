import axios from "axios";

export default {
      getCurrentWeatherData(location_id, appid){
        let api = `http://api.openweathermap.org/data/2.5/weather?id=${location_id}&units=metric&appid=${appid}`;
        return axios.get(api)
        .then(response => {
          return response.data;
        }).catch(error => {
          return "Error : " + error;
        });
      },
      getRainWeatherData(lat, lon){
        let api = `https://gpsgadget.buienradar.nl/data/raintext/?lat=${lat}&lon=${lon}`;
        return axios.get(api)
        .then(response => {
          let dataContainer = [];
          let rainWeatherData = response.data;
              rainWeatherData = rainWeatherData.match(/.{1,9}/g);
              rainWeatherData.forEach(function(element) {
                dataContainer.push({
                  rain: Number(element.split("|")[0]),
                  time: element.split("|")[1]
                });
              });
          rainWeatherData = dataContainer;
          return dataContainer
        }).catch(error => {
          return "Error : " + error;
        });
      },
      getForecastWeatherData(location_id, appid){
        let api = `http://api.openweathermap.org/data/2.5/forecast/daily?id=${location_id}&units=metric&appid=${appid}`;
        return axios.get(api)
          .then(response => {
            return response.data;
          })
          .catch(error => {
            return "Error : " + error;
          });
      }
}
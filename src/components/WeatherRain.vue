<template>
    <div class="weather-container__outer">
        <h2>Weather - Rain (next 3 hours)</h2>
        <h3>{{rainWeatherData.name}}</h3>

        <div class="weather-forcast__item">
            <div class="weather-forcast__item-data">
                <ul>
                    <li v-for="(item, index) in rainWeatherData">
                        <p>{{item.time}} - {{calculateDownfall(item.rain)}} mm/u.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherRain",
        data() {
            return {
                rainWeatherData: [],
                appid: process.env.VUE_APP_WEATHER_API_KEY,
                lat: 52.37,
                lon: 4.89
            }
        },

        methods: {
             calculateDownfall(value) {
                 let calculatedValue = Math.pow( 10, ((value - 109) / 32 ));
                 calculatedValue = parseFloat(calculatedValue.toFixed(2))
                return calculatedValue
            },
            getRainForNext3Hours() {
                // https://www.buienradar.nl/overbuienradar/gratis-weerdata
                let api = `https://gpsgadget.buienradar.nl/data/raintext/?lat=${this.lat}&lon=${this.lon}`;
                this.axios.get(api)
                    .then((response) => {
                        let dataContainer = []
                        this.rainWeatherData = response.data;
                        this.rainWeatherData = this.rainWeatherData.match(/.{1,9}/g);
                        
                        this.rainWeatherData.forEach(function (element) {
                            dataContainer.push({
                                rain: Number(element.split('|')[0]),
                                time: element.split('|')[1]
                            })
                        });
                        this.rainWeatherData = dataContainer
                        console.log(dataContainer)
                    })
                    .catch(error => {
                        console.log(error)
                    });

            },
        },
        mounted() {
            this.getRainForNext3Hours()
        }
    };
</script>

<style lang="scss" scoped>

</style>
[52.3728, 4.8936]
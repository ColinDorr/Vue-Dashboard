<template>
    <div class="weather-container__outer">
        <h2>Weather - Current</h2>
        <h3>{{currentWeatherData.name}}</h3>

        <div class="weather-current__item">
            <div class="weather-current__item-data">
                <h2>Temperatuur</h2>
                <p><strong>Huidig:</strong> {{currentWeatherData.main.temp}} &deg; C</p>
                <p><strong>Minimum:</strong> {{currentWeatherData.main.temp_min}} &deg; C</p>
                <p><strong>Maximum:</strong> {{currentWeatherData.main.temp_max}} &deg; C</p>

                <h2>Lucht</h2>
                <p><strong>Vochtigheid:</strong> {{currentWeatherData.main.humidity}}%</p>
                <p><strong>Druk:</strong> {{currentWeatherData.main.pressure}} hPa</p>

                <h2>Wind</h2>
                <p><strong>Snelheid:</strong> {{currentWeatherData.wind.speed}} m/s</p>
                <p><strong>Richting:</strong> {{currentWeatherData.wind.deg}}&deg;</p>


                <h2>Het weer</h2>
                <ul v-for="(item, index) in currentWeatherData.weather">
                    <li>{{item.description}} - {{item.main}}</li>
                </ul>
            </div>
        </div>
        </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "WeatherCurrent",
        data() {
            return {
                currentWeatherData: [],
                location_id: 2759794,
                appid: process.env.VUE_APP_WEATHER_API_KEY
            }
        },
        methods: {
            getCurrentWeather() {
                let api =
                    `http://api.openweathermap.org/data/2.5/weather?id=${this.location_id}&units=metric&appid=${this.appid}`

                this.axios.get(api)
                    .then((response) => {
                        console.log(response.data)
                        this.currentWeatherData = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    });
            },
        },
        mounted() {
            this.getCurrentWeather();
        }
    };
</script>

<style lang="scss" scoped>

</style>
[52.3728, 4.8936]
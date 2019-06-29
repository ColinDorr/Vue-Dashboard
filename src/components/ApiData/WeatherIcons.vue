<template>
<div>
        <img
          v-if="imageName == '01d' || imageName == '01n'"
          class="weather__current-temp__image"
          alt="clear_sky"
          src="@/assets/weather-images/clear_sky.svg"
        >
        <img
          v-else-if="imageName == '02d' || imageName == '02n'"
          class="weather__current-temp__image"
          alt="few_clouds"
          src="@/assets/weather-images/few_clouds.svg"
        >
         <img
          v-else-if="imageName == '03d' || imageName == '03n'"
          class="weather__current-temp__image"
          alt="scattered_clouds"
          src="@/assets/weather-images/scattered_clouds.svg"
        >
        <img
          v-else-if="imageName == '04d' || imageName == '04n'"
          class="weather__current-temp__image"
          alt="broken_clouds"
          src="@/assets/weather-images/broken_clouds.svg"
        >
         <img
          v-else-if="imageName == '09d' || imageName == '09n'"
          class="weather__current-temp__image"
          alt="shower_rain"
          src="@/assets/weather-images/shower_rain.svg"
        >
         <img
          v-else-if="imageName == '10d' || imageName == '10n'"
          class="weather__current-temp__image"
          alt="rain"
          src="@/assets/weather-images/rain.svg"
        >
         <img
          v-else-if="imageName == '11d' || imageName == '11n'"
          class="weather__current-temp__image"
          alt="thunderstorm"
          src="@/assets/weather-images/thunderstorm.svg"
        >
        <img
          v-else-if="imageName == '13d' || imageName == '13n'"
          class="weather__current-temp__image"
          alt="snow"
          src="@/assets/weather-images/snow.svg"
        >
        <img
          v-else-if="imageName == '50d' || imageName == '50n'"
          class="weather__current-temp__image"
          alt="mist"
          src="@/assets/weather-images/mist.svg"
        >
        <p v-else>{{imageName}}</p>
        </div>
</template>

<script>
export default {
  name: "WeatherIcons",
  props: {
      imageName : {
          type : String,
          required: true
      }
  },
};
</script>

<style lang="scss">
.weather__current-temp__image{
width: 100%;
display: block;
}
</style>


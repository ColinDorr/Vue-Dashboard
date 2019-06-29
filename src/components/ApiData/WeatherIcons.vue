<template>
    <img
          v-if="imageName == 'broken_clouds'"
          class="weather__current-temp__image"
          alt="broken_clouds"
          src="@/assets/weather-images/broken_clouds.svg"
        >
        <img
          v-else-if="imageName == 'clear_sky'"
          class="weather__current-temp__image"
          alt="clear_sky"
          src="@/assets/weather-images/clear_sky.svg"
        >
        <img
          v-else-if="imageName == 'few_clouds'"
          class="weather__current-temp__image"
          alt="few_clouds"
          src="@/assets/weather-images/few_clouds.svg"
        >
        <img
          v-else-if="imageName == 'mist'"
          class="weather__current-temp__image"
          alt="mist"
          src="@/assets/weather-images/mist.svg"
        >
        <img
          v-else-if="imageName == 'rain' || 'light_rain'"
          class="weather__current-temp__image"
          alt="rain"
          src="@/assets/weather-images/rain.svg"
        >
        <img
          v-else-if="imageName == 'scattered_clouds'"
          class="weather__current-temp__image"
          alt="scattered_clouds"
          src="@/assets/weather-images/scattered_clouds.svg"
        >
        <img
          v-else-if="imageName == 'shower_rain'"
          class="weather__current-temp__image"
          alt="shower_rain"
          src="@/assets/weather-images/shower_rain.svg"
        >
        <img
          v-else-if="imageName == 'snow'"
          class="weather__current-temp__image"
          alt="snow"
          src="@/assets/weather-images/snow.svg"
        >
        <img
          v-else-if="imageName == 'thunderstorm'"
          class="weather__current-temp__image"
          alt="thunderstorm"
          src="@/assets/weather-images/thunderstorm.svg"
        >
        <p v-else>{{imageName}}</p>
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


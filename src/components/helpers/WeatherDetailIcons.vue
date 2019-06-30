<template>
  <div>
    <img
      v-if="imageName == '01d' || imageName == '01n'"
      class="weather-detail__icon"
      alt="clear_sky"
      src="@/assets/weather-images/clear_sky.svg"
    />
    <img
      v-else
      class="weather-detail__icon"
      alt="mist"
      src="@/assets/weather-images/mist.svg"
    />
  </div>
</template>

<script>
export default {
  name: "WeatherDetailIcons",
  props: {
    imageName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.weather-detail__icon {
  width: 100%;
  display: block;
}
</style>

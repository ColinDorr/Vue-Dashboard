<template>
  <div class="home">
    
    <div class="grid-container">

      
      
      <WeatherContent></WeatherContent>

      <Nav></Nav>

      <NewsContent></NewsContent>





      
    </div>
    
  </div>
</template>

<script>
import Nav from "@/components/NavElement.vue";

import WeatherContent from "@/components/WeatherContent.vue";

import NewsContent from "@/components/NewsContent.vue";






export default {
  name: "home",
  components: {
    Nav,
    WeatherContent,
    NewsContent
  }
};
</script>

<style lang="scss">
.grid-container {
  width: 100%;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

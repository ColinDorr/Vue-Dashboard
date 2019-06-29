<template>
  <div class="weather-content-container__outer content-component">

    <h1>{{newsSources[activeNews]}}</h1> 
    <button @click="updateNewsSource('-')"><</button>
    <button @click="updateNewsSource('+')">></button>

    <NewsNu v-if="activeNews == 0"></NewsNu>
    <NewsHacker v-if="activeNews == 1"></NewsHacker>
    <NewsFloridaMan v-if="activeNews == 2"></NewsFloridaMan>

  </div>
</template>

<script>
import NewsNu from "@/components/ApiData/NewsNu.vue";
import NewsHacker from "@/components/ApiData/NewsHacker.vue";
import NewsFloridaMan from "@/components/ApiData/NewsFloridaMan.vue";


export default {
  name: "NewsContent",
  components: {
    NewsNu,
    NewsHacker,
    NewsFloridaMan
  },
  data() {
    return {
      activeNews: 0,
      newsSources: ["Nu.nl News", "Hacker News", "Florida Man News"]
    }
  },
  methods: {
    updateNewsSource(data){
      let datacontainer = this.activeNews;
      if(data === "-"){
        datacontainer = datacontainer - 1;
      }
      else if(data === "+"){
        datacontainer = datacontainer + 1;
      }
      else {
        datacontainer = data
      }
     this.checkNewsSource(datacontainer)
    },
    checkNewsSource(data){
      let max = this.newsSources.length - 1;
       if(data < 0 ){
        this.activeNews = this.newsSources.lenght - 1;
      }
      else if(data > max){
        this.activeNews = 0;
      } 
      else {
         this.activeNews = data;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.weather-content-container__outer{
  width: 100%;
  @include tablet{
    box-sizing: border-box;
    width: calc(100% - 300px - 80px);
    height: 100vh;
    overflow: auto;
  }
}

</style>

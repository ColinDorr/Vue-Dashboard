<template>
  <div id="app">
    <vue-glide>
      <vue-glide-slide v-for="(index) in getSlideLenght" :key="index">
        <div class="item__inner" v-if="groupedSlides.odd[index]">
          <a :href="groupedSlides.odd[index].url">{{groupedSlides.odd[index].label}}</a>
        </div>

        <div class="item__inner" v-if="groupedSlides.even[index]">
          <a :href="groupedSlides.even[index].url">{{groupedSlides.even[index].label}}</a>
        </div>
      </vue-glide-slide>
      {{groupedSlides}}
    </vue-glide>
  </div>
</template>
 
<script>
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  computed: {
    getSlideLenght() {
      let dataContainer = 0;
      if (this.slides) {
        dataContainer = this.slides.length;
      }
      return dataContainer;
    },
    groupedSlides() {
      let dataContainer = {
        even: [],
        odd: []
      };
      this.slides.forEach(function(slide, index) {
        if (index % 2) {
          dataContainer.odd.push(slide);
        } else {
          dataContainer.even.push(slide);
        }
      });
      return dataContainer;
    }
  }
};
</script> 

<style lang="scss">
.item__inner {
  height: 120px;
  background: linear-gradient(#132259, #9661a2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 10px 20px 0;
  box-sizing: border-box;
  a {
    text-decoration: none;
    margin: 0;
    font-size: 24px;
    color: #fff;
  }
}
</style>

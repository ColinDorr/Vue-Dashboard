<template>
  <div class="nav-container__outer content-component">
    <ul class="nav-links">
      <li
        v-for="(item) in navLinks"
        class="nav-links__item"
      >
        <a
          class="nav-links__item-link"
          :style="'background:' + item.color + ';'"
          :href="item.url"
          target="_blank"
        >{{getFirstLetter(item.name)}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  data() {
    return {
      navLinks: [
        {
          url: "https:nu.nl",
          name: "Facebook",
          color: ""
        },
        {
          url: "https:nu.nl",
          name: "Facebook",
          color: ""
        },
        {
          url: "https:nu.nl",
          name: "Facebook",
          color: ""
        },
        {
          url: "https:nu.nl",
          name: "Facebook",
          color: ""
        },
        {
          url: "https:nu.nl",
          name: "Facebook",
          color: ""
        },
        {
          url: "https:nu.nl",
          name: "Facebook",
          color: ""
        },
        {
          url: "https:nu.nl",
          name: "Facebook",
          color: "gray"
        }
      ]
    };
  },
  methods: {
    getFirstLetter(data) {
      return data[0].toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-container__outer{
  width: 100%;
  display: block;
  position: relative;
  background: rgb(173, 216, 230);
   @include tablet{
    width: 40px;
    height: 100vh;
    padding: 10px 0;
  }
}
.nav-links {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @include tablet{
    flex-direction: column;
  }
  
}
.nav-links__item {
  list-style: none;
  margin: 0;
}
.nav-links__item-link {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-weight: bold;
  text-decoration: none;
  background: rgb(173, 216, 230);
  background: linear-gradient(rgb(173, 216, 230), #9198e5);
    &:hover {
      cursor: pointer;
      background: linear-gradient(rgb(170, 170, 170), rgb(160, 160, 160)) !important;
      color: #000;
  }
}
</style>

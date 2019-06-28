<template>
  <div class="nav-container__outer">
    <ul class="nav-links">
      <li
        v-for="(item) in navLinks"
        class="nav-links__item"
        :style="'background-color:' + item.color + ';'"
      >
        <a
          class="nav-links__item-link"
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
.nav-links {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  padding: 10px;
  width: 90px;
  // background: lightblue;
}
.nav-links__item {
  list-style: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0 10px 10px 0;
  background-color: lightgrey;
  &:nth-of-type(even) {
    margin-right: 0;
  }
  &:hover {
    background-color: red !important;
    .nav-links__item-link {
      color: #000;
    }
  }
}
.nav-links__item-link {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}
</style>

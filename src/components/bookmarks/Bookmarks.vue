<template>
  <div class="bookmarks__outer">
    <ul class="bookmarks__list">
       <li class="bookmarks__item" v-for="(item,index) in bookmarks" :key="index">
          <a :href="item.url"  class="item__inner">
            <img class="item__image" :src="`${item.url}/favicon.ico`">
            <p>{{item.label}}</p>
          </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Bookmarks",
  data() {
    return {
      bookmarks: [
        {
          url: "https://nu.nl",
          label: "test"
        },
        {
          url: "https://nu.nl",
          label: "banaan"
        },
        {
          url: "https://nu.nl",
          label: "aardbei"
        },
        {
          url: "https://nu.nl",
          label: "citroen"
        },
        {
          url: "https://nu.nl",
          label: "Facebook"
        },
        {
          url: "https://nu.nl",
          label: "Facebook"
        },
        {
          url: "https://nu.nl",
          label: "Facebook"
        }, {
          url: "https://nu.nl",
          label: "test"
        },
        {
          url: "https://nu.nl",
          label: "banaan"
        },
        {
          url: "https://nu.nl",
          label: "aardbei"
        },
        {
          url: "https://nu.nl",
          label: "citroen"
        },
        {
          url: "https://nu.nl",
          label: "Facebook"
        },
        {
          url: "https://nu.nl",
          label: "Facebook"
        },
        {
          url: "https://nu.nl",
          label: "Facebook"
        }
      ]
    };
  },
}
</script>

<style lang="scss">
.bookmarks__outer{
  padding: 10px 20px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  overflow-x: auto;
  overflow-y: hidden;
}
.bookmarks__list{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0;
  li{
    list-style: none;
    margin-right: 20px;
  }
  .item__image{
    width: 32px;
    height: 32px;
  }
  .bookmarks__item{
    margin-right: 20px;
  }
  .item__inner{
    width: 80px;
    height: 80px;
    padding: 20px 20px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

<template>
  <div class="news-container__outer">
    <h1>News - Hackernews</h1>
    <pre>{{newsData}}</pre>
  </div>
</template>

<script>
  export default {
    name: "NewsHacker",
    data() {
      return {
        newsData : [],
        filterData : [],
      };
    },
    methods: {
      getNewsDataList(){
      // https://hackernews.api-docs.io/v0/live-data/new-and-top-stories
      let api = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
      this.axios
        .get(api)
        .then(response => {
          console.log(response.data);
          this.newsData = response.data;
          this.getNewsDataItem(30)

        })
        .catch(error => {
          console.log(error);
        });
      },
      getNewsDataItem(itemMax){
        let dataContainer = [];
        let self = this;
        this.newsData.forEach(function (element, index) {
           if(index < itemMax ){
            let api = "https://hacker-news.firebaseio.com/v0/item/" + element + ".json?print=pretty";
           self.axios
            .get(api)
            .then(response => {
              dataContainer.push(
                {
                  id : response.dataid,
                  title : response.data.title,
                  type : response.data.type,
                  by : response.data.by,
                  url: response.data.url,
                  score: response.data.score
                })
            })
            .catch(error => {
              console.log(error);
            });
           }
        });
        this.newsData = dataContainer;
    },
    getSingleNewsData(id){
           let api = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty";
           this.axios
            .get(api)
            .then(response => {
              console.log(response.data)
              return response.data
            })
            .catch(error => {
              console.log(error);
            });

    }
    },
    mounted() {
      this.getNewsDataList();
    }
  };
</script>

<style lang="scss" scoped>
</style>
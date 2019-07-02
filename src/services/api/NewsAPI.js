import axios from "axios";

export default {
  getNuNewsData(newsOutlet, appid) {
    let 
      api = `https://newsapi.org/v2/top-headlines?country=nl&domains=${newsOutlet}&apiKey=${appid}`;
      api = `https://newsapi.org/v2/everything?domains=${newsOutlet}&apiKey=${this.appid}`;
      api = `https://newsapi.org/v2/top-headlines?country=nl&category=technology&apiKey=${appid}`;

      function reformData(data) {
        let dataContainer = [];
        data.forEach(function(element) {
          dataContainer.push({
            title: element.title || "",
            description: element.description || "",
            image: element.urlToImage || "",
            date: getTime(element.publishedAt) || "",
            source: getSource(element.source) || "",
            author: element.author || "",
            url: element.url || ""
          });
        });
        return dataContainer;
      };

      function getTime(data) {
        let TimeContainer = data.split("T")[1];
        TimeContainer = TimeContainer.substr(0, 5);
        let DateContainer = data.split("T")[0];
        DateContainer =
          DateContainer.split("-")[2] +
          "-" +
          DateContainer.split("-")[1] +
          "-" +
          DateContainer.split("-")[0];
  
        return TimeContainer + " - " + DateContainer;
      };

      function getSource(value) {
        let data = value;
        if (value.name) {
          data = value.name.toLowerCase();
          data = data.replace("www.", "");
          data = data.charAt(0).toUpperCase() + data.slice(1);
        }
        return data;
      }

      return axios
      .get(api)
      .then(response => {
        return reformData(response.data.articles);
      })
      .catch(error => {
        return "Error : " + error;
      });
  },
  getHackerNewsIDList(){
    let api = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
    return axios
      .get(api)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return "Error : " + error;
      });
  },
  getHackerNewsData(data) {
    function getTime(value) {
      let time = new Date(data * 1000).toLocaleTimeString("nl-NL");
      time = time.substr(0, time.length - 3);
      let date = new Date(data * 1000).toLocaleDateString("nl-NL");
      return time + " - " + date;
    }
        let api = `https://hacker-news.firebaseio.com/v0/item/${data}.json?print=pretty`;
        return axios
          .get(api)
          .then(response => {
           return {
              title: response.data.title || "",
              description: "",
              image: "",
              date: getTime(response.data.time) || "",
              source: "HackerNews",
              author: response.data.by || "",
              url: response.data.url
            }
          })
          .catch(error => {
            return "Error : " + error;
          });
  },
  getFloridaManNewsData() {
    let api = `https://www.reddit.com/r/FloridaMan/top/.json?count=30`;

    function reformData(data) {
      let dataContainer = [];
      data.forEach(function(element) {
        dataContainer.push({
          title: element.data.title || "",
          description: element.data.selftext || "",
          image: element.data.thumbnail || "",
          date: getTime(element.data.created_utc) || "",
          source:
            element.data.subreddit_name_prefixed ||
            element.data.subreddit ||
            "",
          author: element.data.author || "",
          url: element.data.url || ""
        });
      });
      return dataContainer;
    };
    function getTime(data) {
      let time = new Date(data * 1000).toLocaleTimeString("nl-NL");
      time = time.substr(0, time.length - 3);
      let date = new Date(data * 1000).toLocaleDateString("nl-NL");
      return time + " - " + date;
    }
    
    return axios
      .get(api)
      .then(response => {
       return reformData(response.data.data.children);
      })
      .catch(error => {
        return "Error : " + error;
      });
  },
}
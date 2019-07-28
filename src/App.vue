<template>
  <div id="app">
            <div class="app-controls">
              <div class="loaction-controls">
                <button><</button>
                <button>></button>
                </div>
                <div class="reload-controls">
                   <button>Reload (R)</button>
                  </div>
         
        </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/styles/global/global.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: $background-blue-pink;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: $color-dark-blue;
}

#nav a.router-link-exact-active {
  color: $color-lime-green;
}

h4 {
  margin: 0;
}
p {
  margin: 0;
}

.app-controls{
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  .loaction-controls{
    margin-right: 20px;
  }
  .loaction-controls,
  .reload-controls{
    display: flex;
    align-items: center;
    color: white;
    button{
       color: white;
      border: none;
      background: none;
      border-radius: 0;
      padding: 10px 10px;
      margin-right: 10px;
      background: rgba(255, 255, 255, 0.1);
      &:last-of-type{
        margin-right: 0;
      }
    }
  }
}
</style>

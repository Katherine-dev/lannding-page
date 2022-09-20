<template>
  <div id="app">
    <navbar/>
    <header-page/>
    <services/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HeaderPage from './views/Header/index.vue';
import Navbar from './components/Navbar.vue';
import Services from './views/Services/index.vue';

@Component({
  components: {
    HeaderPage,
    Navbar,
    Services,
  },
})
export default class App extends Vue {}
</script>

<style lang='scss'>
@import './scss/style.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include regular
}

.container {
  max-width: 1300px;
  margin: auto;
}

@media (max-width: 1299px) {
  .container {
    max-width: 1100px;
  }
}
@media (max-width: 1199px) {
  .container {
    max-width: 960px;
  }
}
@media (max-width: 991px) {
  .container {
    max-width: 750px;
  }
}
@media (max-width: 768px) {
  .container {
    max-width: 560px;
  }
}
</style>

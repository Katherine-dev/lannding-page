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

html {
  overflow-x: hidden;
}

#app {
  @include regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1100px;
  margin: auto;
}

@media (max-width: 1099px) {
  .container {
    max-width: 800px;
  }
}
@media (max-width: 991px) {
  .container {
    max-width: 650px;
  }
}
@media (max-width: 768px) {
  .container {
    max-width: 560px;
  }
}
</style>

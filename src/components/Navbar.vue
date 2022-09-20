<template>
  <nav class="container header-wrapper">
      <div class="logo">
        <img src="../assets/icons/logo.svg" alt="">
        <span class="logo-text">Trafalgar</span>
      </div>
      <ul class="nav-element__wrapper">
        <li class="nav-element">Home</li>
        <li class="nav-element">Find a doctor</li>
        <li class="nav-element">Apps</li>
        <li class="nav-element">Testimonials</li>
        <li class="nav-element">About us</li>
      </ul>
    </nav>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Navbar extends Vue {}
</script>

<style lang='scss'>
@import '../scss/style.scss';

.header-wrapper {
  display: flex;
}

.nav-element {
  @include regular;
  text-decoration: none;
  list-style-type: none;
  margin-left: 40px;

  &__wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
}
.logo {
  display: flex;
  align-items: center;
}
.logo-text {
  @include bold;
  font-size: 24px;
  margin-left: 12px;
}
</style>

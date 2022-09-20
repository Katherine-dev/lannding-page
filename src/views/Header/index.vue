<template>
    <div class="container hero-wrap">
      <img class="bg-dots" src="../../assets/icons/dots.svg" alt="">

      <div class="text-container">
        <span class="bold-text"> Virtual healthcare<br/>for you</span>
        <span class='regular-text'>Trafalgar provides progressive, and affordable
        <br/>healthcare, accessible on mobile and online<br/>for everyone</span>
        <button class='button-primary'>Consult today</button>
      </div>

      <div class="image-container">
        <img src="../../assets/images/doctors.svg" alt="">
      </div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {}
</script>

<style lang='scss' scoped>
  @import '../../scss/style.scss';

  .hero-wrap {
    display: flex;
    align-items: center;
    gap: 100px;

    position: relative;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .bold-text {
    @include bold;
    font-size: 48px;
  }

  .regular-text {
    font-size: 21px;
    margin-top: 20px;
  }

  .image-container {
    width: 50%;
    img {
      width: 100%;
    }
  }

  .button-primary {
    width: 30%;
    height: 60px;
    margin-top: 40px;

    background-color: $primary-color;
    color: #fff;

    border: none;
    border-radius: 55px;
  }

  .bg-dots {
    position: absolute;
    top: 0;
    left: -150px;
  }
</style>

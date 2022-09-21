<template>
  <div>
    <div class="services-container">
      <img src="../../assets/images/bg-element.svg" alt="" class='bg-element'>
      <img src="../../assets/icons/dots-2.svg" alt="" class='bg-dots'>

      <div class="text-container">
        <span class="bold-text">Our services</span>
        <hr class="divider"/>
        <span class="light-text">We provide to you the best choiches for you.
          Adjust it to your health needs and make sure your undergo treatment <br/>
          with our highly qualified doctors you can consult with us which type of
          service is suitable for your health</span>
      </div>

      <div class="container">
        <div class="grid-container container">
          <card
            v-for="(card, index) in cards"
            :key="index"
            :imageName="card.image"
            :title="card.title"
            :description="card.description"
          />
        </div>
        <div class="button-wrapper">
          <button class="button-o">Learn more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Card from './Card.vue';

@Component({
  components: { Card },
})
export default class Services extends Vue {
  public cards = [
    {
      image: 'search-doctor.svg',
      title: 'Search doctor',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    },
    {
      image: 'pharmacy.svg',
      title: 'Online pharmacy',
      description: 'Buy  your medicines with our mobile application with a simple delivery system',
    },
    {
      image: 'consultation.svg',
      title: 'Consultation',
      description: 'Free consultation with our trusted doctors and get the best recomendations',
    },
    {
      image: 'details.svg',
      title: 'Details info',
      description: 'Free consultation with our trusted doctors and get the best recomendations',
    },
    {
      image: 'emergency.svg',
      title: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
    },
    {
      image: 'tracking.svg',
      title: 'Tracking',
      description: 'Track and save your medical history and health data ',
    },
  ];
}
</script>

<style lang='scss' scoped>
  @import "../../scss/style.scss";

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 190px;
  }

  .bold-text {
    @include bold;
    font-size: 36px;
    color: #000;
  }

  .light-text {
    @include light;
    font-size: 18px;

    margin-top: 33px;
  }

  .divider {
    width: 56px;
    height: 2px;

    border-width: 0;
    color: black;
    background-color: black;

    margin-top: 26px;
  }

  .grid-container {
    display: grid;
    justify-content: center;

    grid-template-columns: repeat(3, 350px);
    grid-template-rows: repeat(2, 350px);
    grid-gap: 34px;

    margin-top: 80px;
  }

  .container {
    position: relative;
  }

  .bg-element, .bg-dots {
    position: absolute;
  }

  .bg-dots {
    top: 1200px;
    right: 180px;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;

    margin-top: 70px;
  }

  .button-o {
    @include button-o;
    @include bold;

    border-color: $primary-color;
    color: $primary-color;
    background-color: transparent;

    line-height: 60px;
    padding: 0 50px;

    border-radius: 55px;
    border-style: solid;
  }
</style>

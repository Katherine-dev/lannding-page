<template>
  <div class="card-wrapper" v-if='imageName'>
    <img :src="require(`@/assets/icons/${imageName}`)" alt="" width='90px' height='90px'>
    <span class="title bold-text">{{title}}</span>
    <span class="description light-text">{{description}}</span>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})

export default class Card extends Vue {
  @Prop() public imageName!: string;

  @Prop() public title!: string;

  @Prop() public description!: string;
}
</script>

<style lang='scss' scoped>
  @import "../../scss/style.scss";

  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

    background-color: #fff;

    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
    border-radius: 20px;
    padding: 62px 52px 42px 32px;
  }

  .bold-text {
    @include bold;
    font-size: 24px;
    color: #000;

    margin-top: 22px
  }

  .light-text {
    @include light;
    font-size: 16px;

    margin-top: 34px;
  }

</style>

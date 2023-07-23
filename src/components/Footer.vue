<template>
  <div>
  <div class="footer">
    <div id="about">
      <div class="title">about</div>
      <div class="text">
        In 2023, we launched Augury Beverage Co. to offer a variety of delightful drinks to Salt Lake Valley and beyond.
        <br />
        <br />
        Our diverse lineup includes bubbly hop-infused teas, refreshing tonics, and sparkling waters, all carefully crafted with handpicked, locally-sourced ingredients.
        <br />
        <br />
        We are dedicated to creating great-tasting beverages without harmful additives. We hope you enjoy our drinks as much as we love making them.
      </div>
      
    </div>
    
    <WhereToBuy id="buy"></WhereToBuy>
  </div>
  <div class="footer-inner">
    <!-- <img class="footer-img" :src="require('@/assets/images/amphora.svg')" /> -->
      <a class="footer-item" href="mailto:hello@augurybeverage.co"> Contact us</a>
      <a class="footer-item" href="mailto:hello@augurybeverage.co"> Wholesale Inquiry</a>
      <br>
      <p class="a">© {{ year }} Taproot Soda </p>
      <br>
      <br>
      <p class="a">Site by <a target="_blank" href="https://beankonducta.com/">Beankonducta</a></p>
    </div>
</div>
</template>

<script>
import WhereToBuy from "./WhereToBuy.vue";
/* eslint-disable */
export default {
  name: "Footer",
  components: {
    WhereToBuy,
  },
  data() {
    return {
      arrowColor: "#B2E1D8",
    };
  },
  methods: {},
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  padding-top: 5vh;
  margin-bottom: 1vh;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.footer-inner {
  text-align: center;
  margin-right: 3vw;
  padding-top: 2vh;
  margin-top: -2vh;
  margin-bottom: 1vh;
  font-size: calc(.2rem + 1vw);
  font-family: "PGGothicHeadline-Regular";
  text-transform: uppercase;
  letter-spacing: .12rem;
  z-index: 99;
  width: 101%;
}

.footer-img {
  width: 10%;
  float: left;
  margin-left: 1vw;
}

.footer-item {
  padding: .5rem;
  margin-bottom: 0;
}

#contact {
  font-size: calc(0.4rem + 1vw);
  font-family: "PGGothicHeadline-Regular";
  text-transform: uppercase;
  letter-spacing: 0.12rem;
}

#about {
  text-align: left;
  padding: 5vw;
  max-width: 400px;
}

#buy {
  padding: 5vw;
  max-width: 400px;
}

.arrow {
  position: absolute;
  top: 0;
  left: 1%;
  width: 15%;
}

</style>

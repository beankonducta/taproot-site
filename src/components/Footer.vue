<template>
  <div>
  <div class="footer">
    <div class="arrow">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 144 48.95"
        style="enable-background: new 0 0 144 48.95"
        xml:space="preserve"
      >
        <path
          :fill="arrowColor"
          d="M2.66,0.25C29.78,6.92,53.5,24.17,70.43,48.11c0.79,1.12,2.4,1.12,3.19,0c16.96-23.98,40.73-41.25,67.89-47.9
	C142.07,0.11,142.92,0,144,0H0C1.2,0,2.12,0.14,2.66,0.25z"
        />
      </svg>
    </div>
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
  font-family: "BNBergen";
  text-transform: uppercase;
  letter-spacing: .12rem;
  z-index: 99;
  width: 101%;
  background: white;
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
  font-family: "BnBergen";
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

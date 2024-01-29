<template>
  <div>
    <div class="footer">
      <div id="about">
        <div class="title">about</div>
        <div class="text">
          Taproot Soda is a proudly rooted Utah-based company, dedicated to
          crafting delicious and refreshing sodas using locally sourced and
          organic ingredients wherever possible. Our mission is to create
          beverages that you can feel good about, with ingredients you can
          pronounce and recognize.
          <br /><br />
          We believe in community and love our home state, so we've committed to
          giving 1% back through local causes, as well as using environmentally
          conscious production methods, packaging material and merch.
          <br /><br />
          Join us on our journey to redefine what it means to enjoy a soda,
          whether by itself or as a cocktail mixer, and discover the authentic
          taste of Utah in every sip of Taproot Soda. Cheers!
        </div>
      </div>

      <WhereToBuy id="buy"></WhereToBuy>
    </div>
    <div class="footer-inner">
      <!-- <img class="footer-img" :src="require('@/assets/images/amphora.svg')" /> -->
      <a class="footer-item" id="contact" href="mailto:hello@taprootsoda.com"> Contact us</a>
      <a class="footer-item" href="mailto:orders@taprootsoda.com">
        Wholesale Inquiry</a
      >
      <br />
      <p class="a">© {{ year }} Taproot Soda</p>
      <br />
      <br />
      <p class="a">
        Site by
        <a target="_blank" href="https://beankonducta.com/">Beankonducta</a>
      </p>
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
  font-size: calc(0.2rem + 1vw);
  font-family: "PGGothicHeadline-Regular";
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  z-index: 99;
  width: 101%;
}

.footer-img {
  width: 10%;
  float: left;
  margin-left: 1vw;
}

.footer-item {
  padding: 0.5rem;
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
  max-width: 700px;
}

#buy {
  padding: 5vw;
  max-width: 700px;
}

.arrow {
  position: absolute;
  top: 0;
  left: 1%;
  width: 15%;
}
</style>

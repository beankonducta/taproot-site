<template>
  <div id="app">
    <NavBar @switchAlc="switchAlc($event)"></NavBar>
    <Header></Header>
    <Product v-for="(product) in products" :key="product.title" :img="product.img" :title="product.title"
      :caption="product.caption" :color="product.color" :bg="product.bg" :accent="product.accent" :scrollY="scrollY"
      :cocktailHeader="alc ? product.cocktailHeader : product.mocktailHeader"
      :cocktailBody="alc ? product.cocktailBody : product.mocktailBody" :alc="alc"
      :accentImage="product.accentImage" :accentSide="product.accentSide" />
    <Footer></Footer>
    <!-- <Product
      :key="products[currentProduct].title"
      :img="products[currentProduct].img"
      :title="products[currentProduct].title"
      :caption="products[currentProduct].caption"
      :color="products[currentProduct].color"
    /> -->
    <!-- <button @click="next()">next</button>
    <button @click="prev()">prev</button> -->
  </div>
</template>

<script>
import Product from "./components/Product.vue";
import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      alc: false,
      currentProduct: 0,
      products: [
        {
          img: require("./assets/images/Blackberry-Mint-Web.png"),
          accentImage: require("./assets/images/BBM.svg"),
          accentSide: "right",
          title: "Blackberry Mint",
          caption: "We start with fresh Blackberry puree and add mint to create a refreshing, lightly sweetened soda.",
          color: "#7e224b",
          bg: "#00996e",
          accent: "#bdcce9",
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `G and Tea  <br><br>
                         - 2 oz Gin, the more herbal the better <br>
                         - 1/2 oz lime juice <br>
                         - 4 oz Augury Khloris <br>
                         - lime wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lime wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Tonic and Tea <br><br>
                         - 3 oz Augury Tonic Water <br>
                         - 1/2 oz lime juice <br>
                         - 3oz Augury Khloris <br>
                         - lime wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lime wheel.`
        },
        {
          img: require("./assets/images/Cherry-Limeade-Template-Web.png"),
          accentImage: require("./assets/images/CL.svg"),
          accentSide: "left",
          title: "Cherry Limeade",
          caption: "",
          color: "#4eb748",
          bg: "#991b35",
          accent: "#fccfc6",
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Earl Grey Collins <br><br>
                         - 2 oz Dry Gin <br>
                         - 1 oz lemon juice <br>
                         - 4 oz Augury Mellona <br>
                         - orange wedge <br>
                         - fresh mint <br><br>
                         Stir over ice and serve in a highball glass. Garnish with orange and mint.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Earl Grey Collins <br><br>
                         - 3 oz Augury Tonic Water <br>
                         - 1 oz lemon juice <br>
                         - 3 oz Augury Mellona <br>
                         - orange wedge <br>
                         - fresh mint <br><br>
                         Stir over ice and serve in a highball glass. Garnish with orange and mint.`
        },
        {
          img: require("./assets/images/Rootbeer-Template-Web.png"),
          accentImage: require("./assets/images/RB.svg"),
          accentSide: "right",
          title: "Rootbeer",
          caption: "",
          color: "#733213",
          bg: "#ae8269",
          accent: "#e0cfc4",
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Whiskey Tonic <br><br>
                         - 2 oz whiskey (bourbon works well) <br>
                         - 6 oz Augury Tonic Water <br>
                         - Lemon wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lemon wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Lemon-Lime Tonic <br><br>
                         - 3 oz Taproot Lemon Lime Lavender Soda <br>
                         - 1 oz fresh lemon or lime juice <br>
                         - 4 oz Augury Tonic Water <br>
                         - Lemon or lime wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lemon wheel.`
        },
        {
          img: require("./assets/images/Lemon-Lime-Lavender-Web.png"),
          accentImage: require("./assets/images/LLL.svg"),
          accentSide: "left",
          title: "Lemon Lime Lavender",
          caption: "",
          color: "#532b63",
          bg: "#6c8cc7",
          accent: "#c4d82e",
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Scotch Green Tea <br><br>
                         - 2 oz blended scotch <br>
                         - 6 oz Augury Pomona <br>
                         - 1/2 oz lemon juice <br>
                         - lemon wheel <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with lemon wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Green Tea Ginger <br><br>
                         - 3 oz Taproot Lemongrass Ginger Ale <br>
                         - 3 oz Augury Pomona <br>
                         - 1 oz lime juice <br>
                         - fresh mint <br>
                         - candied ginger <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with mint and candied ginger.`
        },
        {
          img: require("./assets/images/Lemongrass-Ginger-Web.png"),
          accentImage: require("./assets/images/LGG.svg"),
          accentSide: "right",
          title: "Lemongrass Ginger",
          caption: "",
          color: "#884225",
          bg: "#76b043",
          accent: "#fede36",
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Tequila Soda <br><br>
                         - 2 oz blanco tequila <br>
                         - 6 oz Augury Sparkling Water <br>
                         - Lime Wheel <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with lime wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `NA Tequila Soda <br><br>
                         - 2 oz NA tequila (lyres is a good brand) <br>
                         - 6 oz Augury Sparkling Water <br>
                         - Lime Wheel <br><br>
                         Stir over ice and serve in your favorite glass. Garnish with lime wheel.`,
        },
        {
          img: require("./assets/images/Strawberry-Fields-Template-Web.png"),
          accentImage: require("./assets/images/SF.svg"),
          accentSide: "left",
          title: "Strawberry Fields",
          caption: "",
          color: "#b70063",
          bg: "#d787a3",
          accent: "#f0d5dd",
          cocktailHeader: "Cocktail Idea",
          cocktailBody: `Whiskey Tonic <br><br>
                         - 2 oz whiskey (bourbon works well) <br>
                         - 6 oz Augury Tonic Water <br>
                         - Lemon wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lemon wheel.`,
          mocktailHeader: "Mocktail Idea",
          mocktailBody: `Lemon-Lime Tonic <br><br>
                         - 3 oz Taproot Lemon Lime Lavender Soda <br>
                         - 1 oz fresh lemon or lime juice <br>
                         - 4 oz Augury Tonic Water <br>
                         - Lemon or lime wheel <br><br>
                         Stir over ice and serve in a highball glass. Garnish with lemon wheel.`
        },
      ],
      scrollY: 0,
    };
  },
  methods: {
    switchAlc(value) {
      this.alc = value;
    },
    next() {
      this.currentProduct++;
      if (this.currentProduct > this.products.length - 1)
        this.currentProduct = 0;
    },
    prev() {
      this.currentProduct--;
      if (this.currentProduct < 0)
        this.currentProduct = this.products.length - 1;
    },
    handleScroll(event) {
      this.scrollY = event.currentTarget.scrollY
    },
  },
  components: {
    Product,
    Header,
    NavBar,
    Footer,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.alc = localStorage.getItem("alc") === "true";
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@font-face {
  font-family: "BarmenoBold";
  src: url("./assets/fonts/Barmeno Bold.woff") format("woff");
}

@font-face {
  font-family: "BarmenoMedium";
  src: url("./assets/fonts/Barmeno Medium.woff") format("woff");
}

@font-face {
  font-family: "BarmenoRegular";
  src: url("./assets/fonts/Barmeno Regular.woff") format("woff");
}

@font-face {
  font-family: "PGGothicHeadline-Regular";
  src: url("./assets/fonts/PGGothicHeadline-Regular.woff") format("woff");
}

@font-face {
  font-family: "PGGothicHeadline-Tall";
  src: url("./assets/fonts/PGGothicHeadline-Tall.woff") format("woff");
}

body {
  width: 101vw;
  margin-left: -1vw;
  overflow-x: hidden;
  background: #043939;
}

#app {
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
  position: relative;
  background: #043939;
}

a, .a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #e8dfdf;
}

a:visited {
  color: #ffffff;
}

a:visited:hover {
  color: #e8dfdf;
}

a:active {
  color: #e8dfdf;
}

@media screen and (max-width: 1099px) {
  a {
    font-size:.5rem;
  }

  .a {
    font-size: .5rem;
  }

  .title {
	font-size: 2rem;
	font-family: "BarmenoBold";
	text-transform: uppercase;
	letter-spacing: .25rem;
  color: #5bc5cd;
}

.subtitle {
	font-size: 1.5rem;
	font-family: "BarmenoMedium";
	text-transform: uppercase;
	letter-spacing: .15rem;
  color: #5bc5cd;
}

.caption {
	font-size: 1rem;
	font-family: "PGGothicHeadline-Regular";
	text-transform: uppercase;
	letter-spacing: .1rem
}

.text {
  font-size: .5rem;
  font-family: "BarmenoRegular";
  color: white;
  text-transform: uppercase;
  line-height: 1rem;
	letter-spacing: .1rem;
}

.text-title {
  margin-top: 10px;
  font-size: 1rem;
}
}

@media screen and (min-width: 1100px) {

  a {
    font-size: 1rem;
  }

  .a {
    font-size: 1rem;
  }

  .title {
	font-size: 4rem;
  font-family: "BarmenoBold";
	text-transform: uppercase;
	letter-spacing: .5rem;
  color: #5bc5cd;
}

.subtitle {
	font-size: 2.5rem;
  font-family: "BarmenoMedium";
	text-transform: uppercase;
	letter-spacing: .3rem;
  color: #5bc5cd;
}

.caption {
	font-size: 1.5rem;
	font-family: "PGGothicHeadline-Regular";
	text-transform: uppercase;
	letter-spacing: .12rem
}

.text {
  font-size: 1rem;
  font-family: "BarmenoRegular";
  color: white;
  text-transform: uppercase;
  line-height: 1.2rem;
	letter-spacing: .1rem;
}

.text-title {
  margin-top: 10px;
  font-size: 1.5rem;
}
}

</style>

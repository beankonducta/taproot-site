<template>
  <div id="app">
    <NavBar @switchAlc="switchAlc($event)"></NavBar>
    <Header></Header>
    <Product v-for="(product) in products" :key="product.title" :img="product.img" :title="product.title"
      :caption="product.caption" :color="product.color" :bg="product.bg" :scrollY="scrollY"
      :cocktailHeader="alc ? product.cocktailHeader : product.mocktailHeader"
      :cocktailBody="alc ? product.cocktailBody : product.mocktailBody" :alc="alc" />
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
      // light then dark, mellona, pomona, khloris, tonic, water, accent gold color last
      colors: [
        "#A191B2",
        "#003B4A",
        "#BDCF9B",
        "#1A5632",
        "#EFB8A9",
        "#702E3E",
        "#B2E1D8",
        "#003B4A",
        "#FFFFFF",
        "#415364",
        "#AE841F",
      ],
      currentProduct: 0,
      products: [
        {
          img: require("./assets/images/Blackberry-Mint-Web.png"),
          title: "Blackberry Mint",
          caption: "",
          color: "#702E3E",
          bg: "#EFB8A9",
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
          title: "Cherry Limeade",
          caption: "",
          color: "#003B4A",
          bg: "#A191B2",
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
          img: require("./assets/images/Lemon-Lime-Lavender-Web.png"),
          title: "Lemon Lime Lavender",
          caption: "",
          color: "#1A5632",
          bg: "#BDCF9B",
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
          title: "Lemongrass Ginger Ale",
          caption: "Simple, Light and Bubbly Sparkling Water",
          color: "#415364",
          bg: "#FFFFFF",
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
          img: require("./assets/images/Rootbeer-Template-Web.png"),
          title: "Rootbeer",
          caption: "Deliciously Crisp Citrus Based Tonic",
          color: "#003B4A",
          bg: "#B2E1D8",
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
          img: require("./assets/images/Rootbeer-Template-Web.png"),
          title: "Strawberry Fields",
          caption: "Strawberry Fields (With Glitter)",
          color: "#003B4A",
          bg: "#B2E1D8",
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
  font-family: "BNMainz";
  src: url("./assets/fonts/BNMainz.woff2") format("woff2"),
    url("./assets/fonts/BNMainz.woff") format("woff");
}

@font-face {
  font-family: "Nightingale";
  src: url("./assets/fonts/Nightingale.woff2") format("woff2"),
    url("./assets/fonts/Nightingale.woff") format("woff");
}

@font-face {
  font-family: "BNBergen";
  src: url("./assets/fonts/BNBergen.woff2") format("woff2"),
    url("./assets/fonts/BNBergen.woff") format("woff");
}

body {
  width: 101vw;
  margin-left: -1vw;
  overflow-x: hidden;
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
}

a {
  color: #ae841f;
  text-decoration: none;
}

a:hover {
  color: #bea977;
}

a:visited {
  color: #ae841f;
}

a:visited:hover {
  color: #bea977;
}

a:active {
  color: #bea977;
}

@media screen and (max-width: 1099px) {
  a {
    font-size:.5rem;
  }

  .title {
	font-size: 2rem;
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: .75rem;
  color: #003b4a;
}

.subtitle {
	font-size: 1.5rem;
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: .7rem;
  color: #003b4a;
}

.caption {
	font-size: 1rem;
	font-family: "Nightingale";
	text-transform: uppercase;
	letter-spacing: .12rem
}

.text {
  font-size: .5rem;
  font-family: "BNBergen";
  color: #003b4a;
  text-transform: uppercase;
  line-height: 1.2rem;
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
  .title {
	font-size: 4rem;
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: 1rem;
  color: #003b4a;
}

.subtitle {
	font-size: 2.5rem;
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: .7rem;
  color: #003b4a;
}

.caption {
	font-size: 1.5rem;
	font-family: "Nightingale";
	text-transform: uppercase;
	letter-spacing: .12rem
}

.text {
  font-size: 1rem;
  font-family: "BNBergen";
  color: #003b4a;
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

<template>
  <div class="nav">
    <a @click="scroll('products')" class="nav-item" href="#products">Our Drinks</a>
    <a @click="scroll('about')" class="nav-item" href="#about">About</a>
    <!-- <a @click="scroll('buy')" class="nav-item" href="#buy">Where To Buy</a> -->
    <!-- <a @click="scroll('contact')" class="nav-item" href="#contact">Contact</a> -->
    <div class="alc" v-if="alc" @click="switchAlc()" title="Click to swap drink ideas between alcoholic and non alcoholic">
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29.54 29.54"
					style="enable-background:new 0 0 29.54 29.54;" xml:space="preserve">
					<g>
						<path :fill="compColor"
							d="M16.62,5.53c0,1.02-0.83,1.85-1.85,1.85s-1.85-0.83-1.85-1.85s1.98-3.37,1.98-3.37S16.62,4.51,16.62,5.53z" />
						<path :fill="compColor" d="M15.29,14.26v-0.85c2.49-0.19,4.6-1.74,5.59-3.91H8.67c0.99,2.17,3.1,3.72,5.59,3.91v0.85v5.58v0.3
		c-0.3,0.2-1.24,0.85-2.17,1.9h5.38c-0.94-1.05-1.88-1.7-2.17-1.9v-0.3V14.26z" />
					</g>
				</svg>
			</div>
			<div class="alc" v-if="!alc" @click="switchAlc()">
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 29.54 29.54"
					style="enable-background:new 0 0 29.54 29.54;" xml:space="preserve">
					<g>
						<path :fill="compColor" d="M20.87,9.51h-9.47l3.9,3.9C17.79,13.21,19.89,11.67,20.87,9.51z" />
						<path :fill="compColor"
							d="M14.25,19.84v0.3c-0.3,0.2-1.24,0.85-2.17,1.9h5.38c-0.94-1.05-1.88-1.7-2.17-1.9v-0.3v-2.65l-1.04-1.04V19.84z" />
						<path :fill="compColor" d="M14.77,3.97c-5.96,0-10.81,4.85-10.81,10.81s4.85,10.8,10.81,10.8s10.81-4.85,10.81-10.8S20.73,3.97,14.77,3.97z
		M20.73,22.22c-1.69,1.35-3.8,2.1-5.96,2.1c-5.26,0-9.54-4.28-9.54-9.54c0-2.15,0.75-4.27,2.1-5.96l0.23-0.28l1.28,1.28l2.88,2.88
		l2.54,2.54l1.04,1.04l5.72,5.72L20.73,22.22z M22.22,20.73l-0.23,0.28l-6.7-6.7l-4.8-4.8L8.53,7.55l0.28-0.23
		c1.69-1.35,3.8-2.1,5.96-2.1c5.26,0,9.54,4.28,9.54,9.54C24.32,16.92,23.57,19.04,22.22,20.73z" />
					</g>
				</svg>
			</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "NavBar",
  data() {
    return {
      compColor: "#003B4A",
      alc: true
    };
  },  
  methods: {
    scroll(element) {
      this.$refs[element].scrollIntoView()
    },
    switchAlc() {
      this.alc = !this.alc
      localStorage.setItem("alc", this.alc ? "true" : "false");
      this.$emit('switchAlc', this.alc)
    }
  },
  mounted() {
    this.alc = localStorage.getItem('alc') === 'true';
    this.$emit('switchAlc', this.alc)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  text-align: center;
  margin-right: 3vw;
  padding-top: 2vh;
  margin-top: -2vh;
  margin-bottom: 1vh;
  padding-bottom: 1vh;
  font-size: calc(.2rem + 1vw);
  font-family: "BNBergen";
  text-transform: uppercase;
  letter-spacing: .12rem;
  position: fixed;
  z-index: 99;
  width: 101%;
  background: white;
  box-shadow: -2px 5px 10px rgba(46, 35, 35, 0.1);
}

.alc {
  min-width: 30px;
  max-width: 50px;
  margin-top: -5px;
  float: right;
}

.alc:hover,
.alc:active {
	cursor: pointer;
	opacity: 0.75;
  transform: rotate(15deg);
}

.nav-item {
  padding: .5rem;
}
</style>

<template>
	<div class="product" :ref="title" :style="{ background: bg }" id="products">
		<div class="product-wrapper fade" :class="[{ visible: isVisible }]" :style="{ opacity: opacity }"
			:id="`${title.replace(' ', '-')}`">
			<img :src="accentImage" :class="accentClass" />
			<div class="title" :class="titleClass" :style="{ color: color }">{{ title }}</div>
			<img class="image slide-in-can product-image" v-bind:src="img" :alt="title"/>
			<div :class="captionClass">
			<div class="caption" :style="{ color: accent }">{{ caption }}</div>
			<div class="ingredient-title" :style="{ color: color }">Real flavors from:</div>
			<div class="caption" :style="{ color: accent }">{{ ingredients }}</div>
		</div>
		</div>
		<!-- <div class="cocktail" :style="{ background: this.color }"
			:class="[isVisible ? 'slide-in' : 'slide-out', screenWidth <= minWidth ? 'hide' : '']">
			<div class="subtitle" :style="{color: this.bg, opacity: opacity }">{{ cocktailHeader }}</div>
			<div class="text" :style="{color: this.bg, opacity: opacity }" v-html="cocktailBody">

			</div>
		</div> -->
		<!-- <div class="cocktail-mobile" :style="{ background: this.color}">
			<div class="subtitle cocktail-mobile-header" :style="{color: this.bg, opacity: opacity }">{{ cocktailHeader }}</div>
			<div class="text cocktail-mobile-body" :style="{color: this.bg, opacity: opacity }" v-html="cocktailBody">
			</div>
		</div> -->
	</div>
</template>

<script>
// import tinycolor from "tinycolor2";
/* eslint-disable */
export default {
	name: "Product",
	props: {
		img: String,
		accentImage: String,
		title: String,
		caption: String,
		color: String,
		accent: String,
		bg: String,
		scrollY: Number,
		cocktailHeader: String,
		cocktailBody: String,
		alc: Boolean,
		accentSide: String,
		ingredients: String,
		nutrition: String
	},
	data() {
		return {
			isVisible: false,
			yPos: 0,
			screenWidth: 0,
			minWidth: 1100
		};
	},
	updated() {
		this.yPos =
			this.$refs[this.title].getBoundingClientRect().y +
			document.documentElement.scrollTop;
	},
	mounted() {
		this.yPos =
			this.$refs[this.title].getBoundingClientRect().y +
			document.documentElement.scrollTop;
		const options = {
			rootMargin: "0px",
			threshold: 0.1,
		};
		const observer = new IntersectionObserver(this.handleIntersect, options);
		observer.observe(this.$el);
		this.updateScreenWidth();
		this.onScreenResize();
	},
	methods: {
		switchAlc() {
			this.alc = !this.alc;
			this.$emit("switchAlc", this.alc)
		},
		handleIntersect(entries) {
			const entry = entries[0];
			this.isVisible = entry.isIntersecting;
		},
		onScreenResize() {
			window.addEventListener("resize", () => {
				this.updateScreenWidth();
			});
		},
		updateScreenWidth() {
			this.screenWidth = window.innerWidth;
		},
	},
	computed: {
		accentClass() {
			return this.accentSide === "right" ? "accent-image-right" : "accent-image-left";
		},
		titleClass() {
			return this.accentSide === "right" ? "title-right" : "title-left";
		},
		captionClass() {
			return this.accentSide === "right" ? "caption-container-right" : "caption-container-left";
		},
		compColor() {
			// return tinycolor(this.color).complement().toHexString();
			return this.color;
		},
		yOffset() {
			return this.scrollY - this.yPos;
		},
		cocktailX() {
			let x = this.yOffset;
			let p = x / 7;
			return p >= 0 ? "0%" : p + "%";
		},
		imageX() {
			let x = this.yOffset;
			let p = x / 7;
			return p >= 0 ? "0%" : p * -1 + "%";
		},
		opacity() {
			// let x = this.yOffset;
			// let p = x / 7;

			// return `${150-p}%`;
			return "100%";

		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
	width: 100%;
	text-align: center;
	margin: 0 auto;
	padding-top: 100px;
	padding-bottom: 200px;
	position: relative;
}

.product-wrapper {
	width: 80%;
	text-align: center;
	margin: 0 auto;
}

.caption-container-right {
	position: absolute;
	bottom: 10%;
	width: 40%;
	left: 10%;
	text-align: left;
	max-width: 400px;
	z-index: 999;
}

.caption-container-left {
	position: absolute;
	bottom: 10%;
	width: 40%;
	right: 10%;
	text-align: right;
	max-width: 400px;
	z-index: 999;
}

.title {
	animation: subtle-bounce 4s infinite;
}

@keyframes subtle-bounce {
	0% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-5px);
	}

	100% {
		transform: translateY(0);
	}
}


.title-right {
	position: absolute;
	top: 5%;
	left: 10%;
}

.title-left {
	position: absolute;
	top: 5%;
	right: 10%;
}

.accent-image-right {
	position: absolute;
	top: -15%;
	right: 0;
	height: 40%;
	max-width: 600px;
}
.accent-image-left {
	position: absolute;
	top: -15%;
	left: 0;
	height: 40%;
	max-width: 600px;
}

.image {
	width: 60%;
	min-width: 280px;
	max-width: 700px;
}

.ingredient-title {
	font-size: 1rem;
    font-family: "BarmenoRegular";
    color: white;
    text-transform: uppercase;
    line-height: 1.2rem;
    letter-spacing: .1rem;
	margin-top: 20px;
	margin-bottom: 20px;
}

.fade {
	opacity: 0;
	transition: 0.5s opacity ease-in-out;
}

.visible {
	opacity: 1;
}

.cocktail {
	width: 30%;
	min-width: 380px;
	max-width: 500px;
	position: absolute;
	text-align: right;
	top: 35%;
	right: -30%;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
	padding-right: 1%;
	padding-left: 2%;
	border-radius: 0% 1% 1% 0%;
	box-shadow: -2px 3px 2px rgba(30, 8, 8, 0.167);
}

.cocktail-mobile {
	width: 50%;
	position: relative;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
	padding-right: 10%;
	padding-left: 10%;
	margin-top: 5%;
	margin-bottom: 0;
	box-shadow: -2px 3px 2px rgba(30, 8, 8, 0.167);
	margin: 0 auto;
}

.cocktail-mobile-body {
	text-align: left;
	margin-bottom: 10px;
}

.cocktail-mobile-header {
	margin-bottom: 30px;
	margin-top: 10px;
	color: white !important;
	z-index: 5;
}

.cocktail a {
	padding-top: 2vh;
}

.cocktail-header {
	padding-top: 2vh;
	width: 85%;
	margin: 0 auto;
	font-size: calc(1rem + 2vw);
	font-family: "BNMainz";
	text-transform: uppercase;
	letter-spacing: 1rem;
}

.cocktail-body {
	padding: 2vh;
	font-size: calc(0.2rem + 1vw);
	font-family: "BNBergen";
	text-transform: uppercase;
	text-align: left;
	line-height: 1.5rem;
	letter-spacing: .1rem;
}

.arrow {
	position: absolute;
	top: -1px;
	left: 1%;
	width: 15%;
}

.slide-in,
.slide-in-can {
	animation: slide-in 2s forwards;
}

.slide-out,
.slide-out-can {
	animation: slide-out 2s forwards;
}

.fixed {
	position: fixed;
	top: 0;
}

.relative {
	position: relative;
}

.hide {
	display: none;
}

@keyframes slide-in {
	0% {
		right: -70%;
	}

	30% {
		right: -70%;
	}

	100% {
		right: 0%;
	}
}

@-webkit-keyframes slide-in {
	0% {
		right: -70%;
	}

	30% {
		right: -70%;
	}

	100% {
		right: 0%;
	}
}

@keyframes slide-out {
	100% {
		right: -30%;
	}
}

@-webkit-keyframes slide-out {
	100% {
		right: -30%;
	}
}

@keyframes slide-in-can {
	100% {
		margin-right: 0%;
	}
}

@-webkit-keyframes slide-in-can {
	100% {
		margin-right: 0%;
	}
}

@keyframes slide-out-can {
	100% {
		margin-right: 100%;
	}
}

@-webkit-keyframes slide-out-can {
	100% {
		margin-right: 100%;
	}
}
</style>

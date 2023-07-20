<template>
  <div class="header">
      <div id="inner">
        <!-- <img id="header-logo" :src="require('@/assets/images/logo.svg')" /> -->
        <!-- <div id="about-container">
          <object
            id="elder-flower"
            type="image/svg+xml"
            :data="require('@/assets/images/elder_flower.svg')"
          ></object>
        </div> -->
      </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 80%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20%;
}
#inner {
  margin-top: 5%;
}

#header-logo {
  margin-top: 10vh;
  width: 45%;
}

#about-text {
  width: 45%;
  margin: 0 auto;
  margin-top: 0%;
}

#elder-flower {
  position: absolute;
  width: 20%;
  top: 45%;
  left: 40%;
  -webkit-animation: fade 1s ease-in;
  animation: fade 1s ease-in;
}

#squiggle {
  padding-bottom: 1rem;
  margin-top: -1%;
  background-position: 0% 100%;
  background-repeat: repeat-x;
  background-size: 250px;
  color: #d8eeea;
  animation: animateSquiggles 10s infinite linear;
}

#about-container {
  position: relative;
}

#squiggle-container {
  width: 45%;
  margin: 0 auto;
  text-align: center;
}

.spacer {
  height: 5%;
}

@media (min-width: 1500px) {
  #header-logo {
    width: 37%;
  }
}

@media (max-width: 1200px) {
  #header-logo {
    width: 45%;
  }
}
@media (max-width: 1100px) {
  #header-logo {
    width: 55%;
  }
}
@media (max-width: 900px) {
  #header-logo {
    width: 75%;
  }
}

@keyframes move-1 {
  0% {
    bottom: -101%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-2 {
  0% {
    bottom: -102%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-3 {
  0% {
    bottom: -103%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-4 {
  0% {
    bottom: -103.5%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-5 {
  0% {
    bottom: -104%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-6 {
  0% {
    bottom: -105%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-7 {
  0% {
    bottom: -106%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-8 {
  0% {
    bottom: -107%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-9 {
  0% {
    bottom: -108%;
  }
  100% {
    bottom: 115%;
  }
}
@keyframes move-10 {
  0% {
    bottom: -109%;
  }
  100% {
    bottom: 115%;
  }
}

@keyframes fade {
  0% {
    opacity: 0%;
  }
  80% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

@-webkit-keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes slide-in-blurred-top-after {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  60% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes animateSquiggles {
  0% {
    background-position: 0% 100%;
  }
  25% {
    background-position: 25% 100%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 75% 100%;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>

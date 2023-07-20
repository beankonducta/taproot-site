<template>
  <div class="where-to-buy" id="buy">
    <div class="title">Retailers</div>
    <div class="inner">
      <div class="text" v-if="retailers.length === 0">
      Coming soon</div>
      <div class="text" v-for="retailer in retailers" :key="retailer.name">
        <div class="text-title">
        {{ retailer.name }}
      </div>
        <br />
        {{ retailer.address }}
        <br />
        {{ retailer.city }}, {{ retailer.state }} {{ retailer.zip }}
        <br />
        <a :href="retailer.website" target="_blank">{{ retailer.website }}</a>
        <br />
        <div class="spacer"></div>
      </div>
    </div>
  </div>
</template>
  
  <script>
/* eslint-disable */
export default {
  name: "WhereToBuy",
  data() {
    return {
      retailers: [
        // {
        //   name: "Blue Copper 2000",
        //   address: "401 N 300 W",
        //   city: "Salt Lake City",
        //   state: "UT",
        //   zip: "84103",
        //   website: "https://bluecopperslc.com/",
        // },
        // {
        //   name: "Blue Copper Coffee Room",
        //   address: "179 W 900 S",
        //   city: "Salt Lake City",
        //   state: "UT",
        //   zip: "84101",
        //   website: "https://bluecopperslc.com/",
        // },
      ],
    };
  },
  methods: {},
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.where-to-buy {
  position: relative;
  background: white;
  text-align: left;
}
.spacer {
  height: 1vh;
  border-bottom: 1px solid #003b4a;
  width: 50%;
  margin-bottom: 1vh;
}

.inner {
    max-height: 1000px;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
  
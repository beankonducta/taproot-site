<template>
  <div class="where-to-buy" id="buy">
    <div class="title">Retailers</div>
    <div class="inner">
      <div class="text" v-if="retailers.length === 0">
        Coming soon</div>
      <!-- <div class="text" v-for="retailer in retailers" :key="retailer.name">
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
      </div> -->
      <div class="text" v-for="retailer in newRetailers" :key="retailer.name">
        <div class="text-title">
          {{ retailer.name }}
        </div>
        <br />
        {{ retailer.city }}, {{ retailer.state }} {{ retailer.zip }}
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
        {
          name: "Blue Copper 2000",
          address: "401 N 300 W",
          city: "Salt Lake City",
          state: "UT",
          zip: "84103",
          website: "https://bluecopperslc.com/",
        },
        {
          name: "Blue Copper Coffee Room",
          address: "179 W 900 S",
          city: "Salt Lake City",
          state: "UT",
          zip: "84101",
          website: "https://bluecopperslc.com/",
        },
      ],
      newRetailers: [
        { name: "Beltex Meats", city: "Salt Lake City", state: "UT", zip: "84105" }, { name: "Block Restaurant", city: "Provo", state: "UT", zip: "84604" }, { name: "Caputo's Downtown", city: "Salt Lake City", state: "UT", zip: "84101" }, { name: "Caputo's Holladay", city: "Holladay", state: "UT", zip: "84117" }, { name: "Caputo's on 15th", city: "Salt Lake City", state: "UT", zip: "84105" }, { name: "Central 9th Market", city: "Salt Lake City", state: "UT", zip: "84101" }, { name: "DeeLicious Park City", city: "Park City", state: "UT", zip: "84098" }, { name: "Deer Valley Cafe", city: "Park City", state: "UT", zip: "84060" }, { name: "Dented Brick Distillery", city: "South Salt Lake", state: "UT", zip: "84115" }, { name: "Dolcetti 9th and 9th", city: "Salt Lake City", state: "UT", zip: "84105" }, { name: "Escalante Outfitters", city: "Escalante", state: "UT", zip: "84726" }, { name: "Etta Place Cider", city: "Torrey", state: "UT", zip: "84775" }, { name: "Fav Bistro", city: "Holladay", state: "UT", zip: "84117" }, { name: "Formation Coffee", city: "Cedar City", state: "UT", zip: "84720" }, { name: "Frankie & Essl's Breakfast", city: "Salt Lake City", state: "UT", zip: "84105" }, { name: "Garden Cafe", city: "Park city", state: "UT", zip: "84098" }, { name: "Grove Market", city: "SLC", state: "UT", zip: "84115" }, { name: "Hana Ramen", city: "Park City", state: "UT", zip: "84098" }, { name: "Hills and Hollows", city: "Boulder", state: "UT", zip: "84716" }, { name: "Hopkins Brewing Company", city: "Salt Lake City", state: "UT", zip: "84106" }, { name: "Hyatt Regency Salt Lake City", city: "SLC", state: "UT", zip: "84101" }, { name: "Jade Market", city: "Salt Lake City", state: "UT", zip: "84101-1215" }, { name: "Khoury's Fine Wine and Spirits", city: "Las Vegas", state: "NV", zip: "89183" }, { name: "Kiitos Brewing", city: "SLC", state: "UT", zip: "84104" }, { name: "Laziz Kitchen", city: "Salt Lake City", state: "UT", zip: "84101" }, { name: "Laziz Kitchen Midvale", city: "SLC", state: "UT", zip: "84108" }, { name: "Laziz on 2nd", city: "Salt Lake City", state: "UT", zip: "84111" }, { name: "Le Meridien", city: "Salt Lake City", state: "UT", zip: "84101" }, { name: "Liberty Heights Fresh", city: "Salt Lake City", state: "UT", zip: "84105" }, { name: "Maple Grove Wellness", city: "Thatcher", state: "ID", zip: "83283" }, { name: "Marczyk Fine Foods", city: "Denver", state: "CO", zip: "80203" }, { name: "Moonflower", city: "Moab", state: "UT", zip: "84532" }, { name: "Oquirrh", city: "Salt Lake City", state: "UT", zip: "84111" }, { name: "Pago", city: "Salt Lake City", state: "UT", zip: "84102" }, { name: "Pangaea Bakery", city: "Prescott", state: "AZ", zip: "86305" }, { name: "The Honeysuckle Coffee Company", city: "Sandy", state: "UT", zip: "84070" }, { name: "The Legendarium", city: "Salt Lake City", state: "UT", zip: "84111" }, { name: "The Lodge at Blue Sky", city: "Wanship", state: "UT", zip: "84107" }, { name: "The Market at Park City", city: "Park City", state: "UT", zip: "84060" }, { name: "The Ridge Cafe", city: "Draper", state: "UT", zip: "84020" }, { name: "The Root Beer Store", city: "Sandy", state: "UT", zip: "84070" }, { name: "The St. Regis Deer Valley", city: "Park City", state: "UT", zip: "84060" }, { name: "The Store - Highland", city: "Salt Lake City", state: "UT", zip: "84121" }, { name: "The Sweetgrass", city: "Bicknell", state: "UT", zip: "84715" }, { name: "Twisted Fern", city: "Park City", state: "UT", zip: "84060" }, { name: "Valter's Osteria", city: "SLC", state: "UT", zip: "84101" }, { name: "Whole Foods Cottonwood Heights", city: "Salt Lake City", state: "UT", zip: "84121" }, { name: "Whole Foods Park City", city: "Park City", state: "UT", zip: "84098" }, { name: "Whole Foods Sugarhouse", city: "Salt Lake City", state: "UT", zip: "84106" }, { name: "Whole Foods Trolley Sq", city: "Salt Lake City", state: "UT", zip: "84102" }, { name: "WildFin Northwest", city: "Riverton", state: "UT", zip: "84096" }, { name: "Yoko", city: "Salt Lake City", state: "UT", zip: "84111" }, { name: "The Greenhouse Effect", city: "Salt Lake City", state: "UT", zip: "84106" }
      ]
    };
  },
  methods: {},
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.where-to-buy {
  position: relative;
  background: #043939;
  text-align: left;
}

.spacer {
  height: 1vh;
  border-bottom: 1px solid white;
  width: 80%;
  margin-bottom: 1vh;
}

.inner {
  max-height: 1000px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
  
<template>
  <main id="home">
    <Top :title="title" :activeCard="activeCard" />
    <section class="cardStack">
      <router-view></router-view>
      <ul>
        <li v-for="card in cards" :key="card.id" class="card-item">
          <router-link :to="'/card/' + card.id">
            <Card :cardDetails="card" />
            <p class="cardDetails">{{ cardDetails }}</p>
          </router-link>
        </li>
      </ul>
    </section>
    <h2 @click="gotoAddCard">Add a new card</h2>
  </main>
</template>


<script>
import Card from "../components/Card.vue";
import Top from "../components/Top.vue";
export default {
  name: "Home",
  props: {
    cardDetails: Object
  },
  components: { Card, Top },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  },

  data() {
    return {
      title: "E-wallet",
      activeCard: "Active card"
    };
  },

  methods: {
    gotoAddCard() {
      this.$router.push("/AddCard");
    }
  }
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
}

h2 {
  box-shadow: 0px 10px 21px -7px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border-radius: 42px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 12px 28px;
  text-decoration: none;
  text-shadow: 0px 0px 0px #3d768a;
}
h2 {
  background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
  background-color: #408c99;
}
h2 {
  position: relative;
  top: 1px;
}
</style>

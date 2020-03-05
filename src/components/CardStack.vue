<template>
  <div class="activeCard">
    <Card :cardDetails="card" />
    {{ cardDetails }}
    <router-link :to="`/card/${$route.params.id}`"></router-link>
  </div>
</template>

<script>
import Card from "..//components/Card";
export default {
  components: { Card },
  props: {
    cardDetails: Object
  },

  computed: {
    card() {
      return this.$root.$data.cards.find(
        card => card.id == this.$route.params.id
      );
    }
  },

  methods: {}
};
</script>

<style lang="scss">
section {
  display: block;
}

.activeCard {
  margin-left: 10%;
}
</style>
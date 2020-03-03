<template>
  <main id="addCard">
    <h3 @click="gotoHome" class="gotoHome">Home</h3>
    <Top :title="title" :activeCard="activeCard" />
    <router-view></router-view>
    <Card :cardDetails="card"></Card>
    <CardForm @updateCard="updateCard" @addCard="addCard"></CardForm>
  </main>
</template>

<script>
import Top from "../components/Top.vue";
import CardForm from "../components/CardForm.vue";
import Card from "../components/Card.vue";
export default {
  components: {
    Card: Card,
    CardForm: CardForm,
    Top: Top
  },
  data() {
    return {
      title: "Add new card",
      activeCard: "New card",
      card: {
        cardNumber: "XXXX XXXX XXXX XXXX",
        cardholderName: "Full name",
        vendor: "Vendor",
        year: "YY",
        month: "MM"
      }
    };
  },

  methods: {
    gotoHome() {
      this.$router.push("/");
    },

    updateCard(updatedCard) {
      this.card = updatedCard;
    },

    addCard(addedCard) {
      this.card = addedCard;
    }
  }
};
</script>

<style lang="scss">
h3 {
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
h3 {
  background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
  background-color: #408c99;
}
h3 {
  position: relative;
  top: 1px;
}
</style>
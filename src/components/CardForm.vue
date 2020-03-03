<template>
  <main id="cardForm">
    <form>
      <label for="cardNumber" class="col-2">Card Number</label>
      <input
        type="text"
        name="number"
        maxlength="16"
        v-model="card.cardNumber"
        class="col-2"
        placeholder="XXXX XXXX XXXX XXXX"
        required
        @keyup="updateCard"
      />
      <label for="cardholder" class="col-2">Cardholder name</label>
      <input
        type="text"
        name="cardholder"
        v-model="card.cardholderName"
        class="col-2"
        placeholder="John Doe"
        required
        @keyup="updateCard"
      />
      <label for="month" class="col-1">Month</label>
      <select v-model="card.month" class="col-1" @change="updateCard">
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <label for="year" class="col-1">Year</label>
      <select v-model="card.year" class="col-1" @change="updateCard">
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
      </select>
      <label for="vendor" class="col-2">Vendor</label>
      <select v-model="card.vendor" class="col-2" @change="updateCard">
        <option value="Bitcoin Inc">Bitcoin Inc</option>
        <option value="Blockchain Inc">Blockchain Inc</option>
        <option value="Evil Corp">Evil Corp</option>
        <option value="Ninja Bank">Ninja Bank</option>
      </select>
      <button class="addCard" @click.prevent="addCard">Add new card</button>
    </form>
  </main>
</template>


<script>
export default {
  name: "CardForm",
  props: {
    cardDetails: Object
  },

  data() {
    return {
      card: {
        cardNumber: "",
        cardholderName: "",
        vendor: "",
        month: "YY",
        year: "MM",
        id: ""
      }
    };
  },
  methods: {
    updateCard() {
      let card = {
        cardNumber: this.card.cardNumber,
        cardholderName: this.card.cardholderName,
        vendor: this.card.vendor,
        month: this.card.month,
        year: this.card.year
      };
      this.$emit("updateCard", card);
    },
    addCard() {
      if (this.card.id == "") {
        this.card.id = this.$root.$data.cards.length + 1;
        this.$root.$data.cards.push(this.card);
        console.log(this.card.id);
        console.log(this.card);
      }
      this.$emit("addCard", this.card);
      console.log("Added card");
    }
  }
};
</script>

<style lang="scss">
#cardForm {
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}
.cardForm label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.col-2 {
  grid-column: auto/span 2;
}

.col-1 {
  grid-column: auto/span 1;
}

label {
  cursor: default;
}

.cardForm input,
select {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}

input {
  padding: 4px 100px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}

.cardForm input,
select {
  border: 1px solid #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: 2.6rem;
  margin: 0 0 0.8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}

select:not(:-internal-list-box) {
  overflow: visible !important;
}

.addCard {
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
.addCard:hover {
  background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
  background-color: #408c99;
}
.addCard:active {
  position: relative;
  top: 1px;
}
</style>
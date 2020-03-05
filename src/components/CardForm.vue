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
      <button class="addCardBtn" @click.prevent="addCard">Add new card</button>
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
label {
  padding: 0.25rem 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  cursor: default;
}

.col-2 {
  grid-column: auto/span 2;
}

.col-1 {
  grid-column: auto/span 1;
}

input,
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

select {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: menulist;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
  background-color: -internal-light-dark-color(white, black);
  cursor: default;
  margin: 0em;
  font: 400 13.3333px Arial;
  border-radius: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);
  border-image: initial;
}

option {
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}

input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: -internal-light-dark-color(white, black);
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}

select:not(:-internal-list-box) {
  overflow: visible !important;
}

.addCardBtn {
  position: relative;
  background: none;
  background-color: aliceblue;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid aqua;
  padding: 0.5em 1em;
  cursor: pointer;
  margin-left: 29%;
  margin-bottom: 5%;
  margin-top: 5%;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    right: 20%;
    top: -0.21em;
    transform: skewX(-45deg);
    -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    left: 20%;
    bottom: -0.25em;
    transform: skewX(45deg);
    -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover {
    &::before {
      right: 80%;
    }
    &::after {
      left: 80%;
    }
  }
}
</style>
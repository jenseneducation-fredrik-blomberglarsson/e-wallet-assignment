<template>
  <main id="card" :class="this.cardDetails.vendor">
    <article class="vendor">
      <img
        v-if="cardDetails.vendor == 'Bitcoin Inc'"
        src="@/assets/vendor-bitcoin.svg"
        alt="Bitcoin Inc"
      />
      <img v-if="cardDetails.vendor == 'Bitcoin Inc'" src="@/assets/chip-dark.svg" alt="chip" />
      <img
        v-if="cardDetails.vendor == 'Blockchain Inc'"
        src="@/assets/vendor-blockchain.svg"
        alt="Blockchain Inc"
      />
      <img v-if="cardDetails.vendor == 'Blockchain Inc'" src="@/assets/chip-light.svg" alt="chip" />
      <img v-if="cardDetails.vendor == 'Evil Corp'" src="@/assets/vendor-evil.svg" alt="Evil Corp" />
      <img v-if="cardDetails.vendor == 'Evil Corp'" src="@/assets/chip-light.svg" alt="chip" />
      <img
        v-if="cardDetails.vendor == 'Ninja Bank'"
        src="@/assets/vendor-ninja.svg"
        alt="Ninja Bank"
      />
      <img v-if="cardDetails.vendor == 'Ninja Bank'" src="@/assets/chip-light.svg" alt="chip" />
    </article>
    <section class="number">{{ cardDetails.cardNumber }}</section>
    <section class="info">
      <aside class="holder">
        <span>Cardholder name</span>
        <p>{{ cardDetails.cardholderName }}</p>
      </aside>
      <aside class="validUntil">
        <span>Valid until</span>
        <p>{{ cardDetails.month }}/{{ cardDetails.year }}</p>
        <p></p>
      </aside>
    </section>
  </main>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardDetails: Object
  }
};
</script>

<style lang="scss">
#card {
  max-width: 24rem;
  height: 14rem;
  border-radius: 0.6rem;
  padding: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 0.5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, 0.4);
}

.Ninja.Bank {
  background: linear-gradient(
      248.3deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0)
    ),
    #222;
  color: #fff;
}

.Blockchain.Inc {
  background: linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, transparent),
    #8b58f9;
  color: #fff;
}

.Bitcoin.Inc {
  background: linear-gradient(
      0.689turn,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0) 99.07%
    ),
    #ffae34;
  color: #222;
}

.Evil.Corp {
  background: linear-gradient(248.3deg, rgba(0, 0, 0, 0.16), transparent),
    #f33355;
  color: #fff;
}

.vendor [alt="chip"] {
  -ms-flex-item-align: end;
  align-self: flex-end;
  opacity: 1;
}

.vendor img {
  opacity: 0.8;
}

.vendor {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  grid-column: auto / span 2;
  grid-row: auto / span 2;
}
article {
  display: block;
}

section {
  display: block;
}

.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
  text-transform: uppercase;
}

.info {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.holder {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.holder span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
}

.holder p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

aside {
  display: block;
}

.validUntil span {
  display: block;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0 0 0.25rem;
  text-align: right;
}

.validUntil p {
  text-align: right;
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
</style>

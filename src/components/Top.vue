<template>
  <main id="Top">
    <h1 class="title">{{ title }}</h1>
    <p class="cardTitle">{{ activeCard }}</p>
  </main>
</template>

<script>
export default {
  props: {
    title: String,
    activeCard: String
  }
};
</script>


<style lang="scss">
#top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-transform: uppercase;
}

.title,
.cardTitle {
  text-align: center;
}

.cardTitle {
  -webkit-box-flex: 1;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  flex: 1 1 0%;
  padding: 0.25rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.title {
  -webkit-box-flex: 2;
  line-height: 2rem;
  font-size: 2rem;
  flex: 2 1 0%;
  padding: 1.5rem 0px;
  font-family: "Source Sans Pro", sans-serif;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
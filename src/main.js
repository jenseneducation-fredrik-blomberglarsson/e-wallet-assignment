import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
    cards: [
      {
        id: 1,
        cardNumber: "1234 1234 1234 1234",
        cardholderName: "Fredrik Blomberg-Larsson",
        month: "05",
        year: "22",
        vendor: "Bitcoin Inc"
      },
      {
        id: 2,
        cardNumber: "9876 5432 1098 7654",
        cardholderName: "Anders Nilsson",
        month: "12",
        year: "25",
        vendor: "Blockchain Inc"
      },
      {
        id: 3,
        cardNumber: "2134 1835 9213 3718",
        cardholderName: "Sven Fransson",
        month: "08",
        year: "23",
        vendor: "Evil Corp"
      }
    ]
  }),
  render: h => h(App)
}).$mount('#app')

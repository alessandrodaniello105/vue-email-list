// 2. Inizializzo un'istanza di createApp di Vue
const { createApp } = Vue;

createApp({

  data() {
    return {
      emails: []
    }
  },

  methods: {
    getConsole() {
      console.log('i metodi funzionano')
    }
  },

  mounted() {
    this.getConsole()
  }

}).mount('#app')

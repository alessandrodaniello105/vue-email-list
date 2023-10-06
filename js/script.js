// 1. Inizializzo un'istanza di createApp di Vue
const { createApp } = Vue;

createApp({

  data() {
    return {
      emails: [],
      emailStr: ''
    }
  },

  methods: {
    getConsole() {
      console.log('i metodi funzionano')
    },

    //2. 
    getEmailAPI() {
     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
          console.log(email.data.response)
        })
        .catch((error) => {
          console.log('L\'errore è :', error.code)
        } )

    }
  },

  mounted() {
    this.getConsole()
    this.getEmailAPI()

  }

}).mount('#app')

// 1. Inizializzo un'istanza di createApp di Vue
const { createApp } = Vue;

createApp({

  data() {
    return {
      // 3. Creo l'array vuoto che conterrà gli indirizzi email
      emails: [],
      emailStr: '',
      counter: 0,
      errorMessage: ''
    }
  },

  methods: {

    getConsole() {
      console.log('i metodi funzionano')
    },

    // 2. Inizializzo un'istanza di Axios, dopo averlo importato nell'head
    getEmailAPI() {
      
     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {

          // 5. Compilo l'array con l'email generata dall'API
          this.emailStr = email.data.response

          this.emails.push(this.emailStr)       

        })
        .catch((error) => {

          this.errorMessage = error.code;

        })

    },

    // 6. Ciclo dieci volte la generazione dell'email
    generateEmails() {

      while (this.counter < 10) {
        this.getEmailAPI();
        this.counter++
      }

    },

  },

  mounted() {

    this.getConsole();

    this.generateEmails()

    console.log(this.emails);

  }

}).mount('#app')

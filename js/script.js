// 1. Inizializzo un'istanza di createApp di Vue
const { createApp } = Vue;

createApp({

  data() {
    return {
      //3. Creo l'array vuoto che conterrà gli indirizzi email
      emails: [],
      emailStr: '',
      counter: 0,
      emailsLimit: false
    }
  },

  methods: {
    getConsole() {
      console.log('i metodi funzionano')
    },

    //2. Inizializzo un'istanza di Axios, dopo averlo importato dell'head
    getEmailAPI() {
      
     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {

          if (this.counter == 10) {
            this.emailsLimit = true;
          };

          let emailStrTest = email.data.response;
          this.emails.push(emailStrTest);
          this.counter++


        })
        .catch((error) => {

          console.log('L\'errore è :', error.code);

        })

    },

    // 5. Ciclo gli elementi della lista con il mio array compilato
    // generateEmails() {

    //   const emailsLimit = 10;

    //   // for(let email = 0; this.emails.length = emailsLimit; email++) {
    //   //   this.getEmailAPI();

    //   // }

    // }


  },

  mounted() {

    this.getConsole();

    this.getEmailAPI();

  
    console.log(this.emails);

  }

}).mount('#app')

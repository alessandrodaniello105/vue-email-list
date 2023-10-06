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

          

          let emailStrTest = email.data.response;
          // this.emails.push(emailStrTest);
          // this.generateEmails(emailStrTest);
          this.emails.push(emailStrTest)


        })
        .catch((error) => {

          console.log('L\'errore è :', error.code);

        })

    },

    // 5. Ciclo gli elementi della lista con il mio array compilato
    // generateEmails(emailStrTest) {

    //   const emailsLimit = 10;

    //   this.emailStr = emailStrTest;

    //     for(this.counter = 0; this.counter === emailsLimit; this.counter++) {
    //       if (!this.emails.includes(this.emailStr)) {
    //         this.emails.push(this.emailStr);
    //         this.counter++
    //       } else {
    //         console.log('alfonso')
    //       }
    //       console.log(this.counter)
  
  
    //     }

    testEmailGenerator() {
     this.getEmailAPI();
     this.getEmailAPI();
     this.getEmailAPI();
     this.getEmailAPI();

    }


  },

  mounted() {

    this.getConsole();

    this.testEmailGenerator();

  
    console.log(this.emails);

  }

}).mount('#app')

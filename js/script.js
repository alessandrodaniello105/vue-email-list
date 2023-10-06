// 1. Inizializzo un'istanza di createApp di Vue
const { createApp } = Vue;

createApp({

  data() {
    return {
      //3. Creo l'array vuoto che conterrà gli indirizzi email
      emails: [],
      emailStr: '',
      counter: 0,
      counterEnd: 10,
      emailsLimit: false,
      testArray: []
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

          
          // let emailStrTest = email.data.response;

          this.emailStr = email.data.response

          // this.emails.push(emailStrTest);
          // this.generateEmails(emailStrTest);
          this.emails.push(this.emailStr)

          

        })
        .catch((error) => {

          console.log('L\'errore è :', error.code);

        })

    },

    // 5. Ciclo gli elementi della lista con il mio array compilato
    generateEmails() {


      while (this.counter < 10) {
        this.getEmailAPI();
        this.counter++
      }

      // if (this.emailsLimit === false) {

      //   console.log('io esisto');
        
      //   console.log(this.counter)
      //   this.getEmailAPI();
        
      //   this.counter++;
      //   console.log(this.counter)

      // } else if (this.counter === this.counterEnd) {
      //   this.emailsLimit === true
      // }



      // const emailsLimit = 10;

      // this.emailStr = emailStrTest;

      // for(this.counter = 0; this.counter === this.counterEnd; this.counter++) {
      //   // this.getEmailAPI()
      //   console.log(this.counter)


      //   // if (!this.emails.includes(this.emailStr)) {
      //   //   this.emails.push(this.emailStr);
      //   //   this.counter++
      //   // } else {
      //   //   console.log('alfonso')
      //   // }
      //   // console.log(this.counter)


      // }
    },

    cyclingEmails() {

      this.testArray.forEach(() => {
        this.getEmailAPI()
      })

    },

    // cyclingEmails() {
    //   this.testArray.forEach(() => {
    //     this.getEmailAPI()
    //   })
    // },

    getEmailsLimit() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=10&items=10')
          .then(n => {
            
            this.testArray.push(n.data.response)
            

          })
    },

    testEmailGenerator() {

      for(this.counter; this.counter == 10; this.counter++)
        this.getEmailAPI()
        
        // if (this.counter == 10) {
        //   this.getEmailAPI()
        //   this.counter++
        // }
    }


  },

  mounted() {

    this.getConsole();

    // this.getEmailAPI()

    this.generateEmails()


    // this.testEmailGenerator();

    // this.getEmailsLimit();

    // this.cyclingEmails();
    // console.log(this.testArray[0])

  
    console.log(this.emails);

  }

}).mount('#app')

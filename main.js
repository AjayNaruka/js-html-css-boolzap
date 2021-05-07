const app = new Vue({

  el: '#app',

  data: {
    activeChatUser:0,
    userWritingMessage:'',
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },


  methods:{
    image(index){
      return `img/avatar${this.contacts[index].avatar}.jpg`
    },
    attivaChat(index){
      this.activeChatUser=index;
    },
    isSent(index){
      if(this.contacts.messages[activeChatUser].status==="sent") return 'message-box sent'
      else return 'message-box received';
    },
    testClass(index){
      let bubbleColor='received'
      if(this.contacts[this.activeChatUser].messages[index].status==='sent') bubbleColor='sent'
      return 'message-box '+ bubbleColor
    },
    inviaMessaggio(){
      let toAddText= this.userWritingMessage;
      let currentDate = new Date()
      console.log(currentDate.getDate());
      console.log(currentDate.getMonth()+1);
      console.log(currentDate.getFullYear());
      console.log(currentDate.getHours());
      console.log(currentDate.getMinutes());
      console.log(currentDate.getSeconds());
      
      let toAddMessage={
        date:`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        text: toAddText,
        status: 'sent'
      }
      if(toAddText!== ''){
        this.contacts[this.activeChatUser].messages.push(toAddMessage)
      this.userWritingMessage=''
      }
      
    }
  }
})
  


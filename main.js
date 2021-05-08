const app = new Vue({

  el: '#app',

  data: {
    newMessageDiv :false,
    toAddNewContactName:'',
    showtest:true,
    activeChatUser:0,
    filterChat:'',
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
    ],

    /* ARRAY CON TRUE O FALSE IN BASE A CHI VOGLIO MOSTRARE A SX - TUTTI TRUE IN PARTENZA con INITIALIZE */
    filterContacts:[],
  },

  mounted: function(){
    this.initialize()
  },
  methods:{
    image(index){
      return `img/avatar${this.contacts[index].avatar}.jpg`
    },

    //PER SCEGLIERE QUALE CHAT RENDERE VISIBILE NEL CONTENT
    attivaChat(index){
      this.activeChatUser=index;
    },
    
    //PER IMPOSTARE COLORE MESSAGE BOX
    isSent(index){
      let bubbleColor='received'
      if(this.contacts[this.activeChatUser].messages[index].status==='sent') bubbleColor='sent'
      return 'message-box '+ bubbleColor
    },

    //INVIO NUOVO MESSAGE NELLA SPECIFICA CHAT APERTA
    inviaMessaggio(){
      let toAddText= this.userWritingMessage;
      let currentDate = new Date()
      
      let toAddMessage={
        date:`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        text: toAddText,
        status: 'sent'
      }
      if(toAddText!== ''){
        this.contacts[this.activeChatUser].messages.push(toAddMessage)
      this.userWritingMessage=''
      }
      
    },

    //RICERCA SPECIFICA CHAT
    filterUserList(){
      if(this.filterChat===''){
        this.initialize()
      }else{
        //USO ARRAY AUSILIARIO COSI DA NON DOVER RESETTARE OGNI VOLTA FILTERCONTACTS[]
        let innerArray=[]
        for(let i=0;i<this.contacts.length;i++){
          let viewable=false;
          if(this.contacts[i].name.toLowerCase().startsWith(this.filterChat.toLowerCase())) viewable=true
          else viewable=false
          innerArray.push(viewable)
        }
        this.filterContacts=[...innerArray]
      }
      
    },

    initialize(){ //* PER VISIBILITA INIZIALE - NESSUN NOME FILTRATO
      let innerArrayInit=[]
      for(let j=0;j<this.contacts.length;j++){
        innerArrayInit.push(true)
      } 
    this.filterContacts=[...innerArrayInit]
    },

    //PER APRIRE IL MENU A TENDINA PER IL NUOVO CONTATTO 
    showNewContact(){
      this.newMessageDiv=!this.newMessageDiv
    },

    //CREAZIONE NUOVO CONTATTO IN BASE AL VALORE DELL INPUT NEL MENU A TENDINA
    createNewContact(){
      if(this.toAddNewContactName!==''){
        console.log(this.toAddNewContactName);
        let avatarArray =['_1','_2','_3','_4','_5','_6','_7','_8',]
        let newContactObject ={
          name: this.toAddNewContactName,
          avatar: avatarArray[this.numGen(0,avatarArray.length-1)],
          visible:true,
          messages:[]
        }
        this.contacts.push(newContactObject)
        this.newMessageDiv=false
        this.attivaChat(this.contacts.length-1)
        this.initialize() // PER REFRESHARE LA LISTA DELLE CHAT
      }
      this.toAddNewContactName=''
    },

    numGen(min,max){
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
})
  


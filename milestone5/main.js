const app = new Vue({

  el: '#app',

  data: {
    lastDates:[],
    lastDateReceived:[],
    lastMessages:[],

    newMessageDiv :false, //TENDINA
    searchMessageDiv:false, //TENDINA
    showMessageOptions:false,

    toAddNewContactName:'',

    toSearchMessage:'',

    activeChatUser:0,

    filterChat:'',

    userWritingMessage:'',

    anchorToMoveOn:'',
    nextMatch:0,
    arrayForMatches:[],
    highlightsArray:[],
    testHighlight : false,

    options:[],

    user:{
      name:'Ajay Naruka',
      avatar: '_io'
    },
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
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'TEST OCCORRENZE: ',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
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
    this.ultimo()
  },

  updated: function() {
    this.ultimo()
  },
  
  methods:{

    initialize(){ //* PER VISIBILITA INIZIALE - NESSUN NOME FILTRATO
      let innerArrayInit=[]
      for(let j=0;j<this.contacts.length;j++){
        innerArrayInit.push(true)
      } 
    this.filterContacts=[...innerArrayInit]
    },

    //CARICAMENTO AVATAR PRENDENDO DAL DATO PRESENTE NEL SINGOLO USER
    image(index){
      return `img/avatar${this.contacts[index].avatar}.jpg`
    },

    /////////////////////////////////////////////////////////////
    //PER SCEGLIERE QUALE USER CHAT RENDERE VISIBILE NEL CONTENT
    ////////////////////////////////////////////////////////////

    attivaChat(index){
      this.activeChatUser=index;
    },
    
    ////////////////////////////////////////////
    //PER IMPOSTARE COLORE MESSAGE BOX >> NON NECESSARIA <<
    ////////////////////////////////////////////

    isSent(index){
      let bubbleColor='received'
      if(this.contacts[this.activeChatUser].messages[index].status==='sent') bubbleColor='sent'
      return 'message-box '+ bubbleColor
    },

    //////////////////////////////////////////////////////
    //INVIO NUOVO MESSAGE NELLA SPECIFICA CHAT APERTA
    //////////////////////////////////////////////////////

    inviaMessaggio(){
      let toAddText= this.userWritingMessage;
      let currentDate = new Date()
      
      let toAddMessage={
        date:`${dayjs().format('DD')}/${dayjs().format('MM')}/${dayjs().format('YYYY')} ${dayjs().format('HH')}:${dayjs().format('mm')}:${dayjs().format('ss')}`,
        text: toAddText,
        status: 'sent'
      }
      if(toAddText!== ''){
        this.contacts[this.activeChatUser].messages.push(toAddMessage)
      this.userWritingMessage=''
      }

      /* this.ultimo() */ // PER REFRESHARE
      //RISPOSTA
      this.invioRisposta('yes')
      
    },

    invioRisposta(str){
      if(str==='yes'){
        setTimeout(()=>{
          let answer= 'Ok'
          let receiveDate = new Date()
          let toReceiveMessage={
            date:`${dayjs().format('DD')}/${dayjs().format('MM')}/${dayjs().format('YYYY')} ${dayjs().format('HH')}:${dayjs().format('mm')}:${dayjs().format('ss')}`,
            text: answer,
            status: 'received'
          }
          this.contacts[this.activeChatUser].messages.push(toReceiveMessage)
          this.ultimo() // senza questa riga non mi refresha l'ultima data nella lista a sx
        },2000)
      }

      this.ultimo() // da fare anche nel caso in cui non ricevo risposta
    },

    ////////////////////////////////////////////////////////
    //RICERCA SPECIFICA CHAT NEL MENU A SX CON TUTTE LE CHAT
    ////////////////////////////////////////////////////////

    filterUserList(){
      if(this.filterChat===''){
        //SE NON STO CERCANDO NULLA ALLORA MOSTRO TUTTI
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

    //////////////////////////////////
    //CREAZIONE NUOVO CONTATTO
    //////////////////////////////////

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
        this.initialize() // PER FORZARE REFRESHARE LA LISTA DELLE CHAT
      }
      this.toAddNewContactName=''
    },

    /////////////////////////////////////
    //RICERCA MESSAGGIO DENTRO CHAT-AREA
    //////////////////////////////////////

    //apertura menu tendina
    showSearchDiv(str){
      if(str==='icon'){
        this.searchMessageDiv=!this.searchMessageDiv
      }
      if(str==='area'){
        this.searchMessageDiv=false
        this.toSearchMessage='',
        this.nextMatch=0  
      }
    },

    //funzione di ricerca: facendo un confronto tra v-model e i text presenti nel array messages del active user chat:
    searchMessage(){

      // PER SALVARE LE VARIE OCCORRENZE
      let highlights = []
      let matchIndexes=[]
      this.searching=true
      if(this.toSearchMessage!==''){
        let toFind = this.toSearchMessage;
      
      for(let i =0;i<this.contacts[this.activeChatUser].messages.length;i++){
        if(this.contacts[this.activeChatUser].messages[i].text.toLowerCase().includes(toFind.toLowerCase())){
          matchIndexes.push(i)
        }
      }

      //MI SALVO TUTTI GLI INDICI COSI SO QUANTI SONO PER FARE IL CONTROLLO IN MATCHTOLOOK
      this.arrayForMatches=[...matchIndexes]

      for(let i=0;i<this.arrayForMatches.length;i++){
        highlights[i]=true
      }

      this.highlightsArray=[...highlights]

      console.log('highlights: ',highlights.length);
      console.log(matchIndexes);
      console.log('Ci sono: '+matchIndexes.length+'occorrenze');
      //uso this.nextMatch variabile cosi da modificare il messaggi da visualizzare nel caso ho piu occorrenze
      this.anchorToMoveOn='#anchor'+matchIndexes[this.nextMatch]

      //SE VOGLIO MOSTRARE SOLO IL PRIMO RISULTATO:
      /* this.anchorToMoveOn='#anchor'+matchIndexes[0] */
      
      
      
      }
      console.log('test');
      
    },
    nextMatchtoLook(){
      console.log(this.arrayForMatches);
      this.nextMatch++;
      if(this.nextMatch>this.arrayForMatches.length-1) this.nextMatch=0;
      this.searchMessage() // per muovere anchor
      console.log(this.nextMatch);
      
      
      
      
    },
    prevMatchtoLook(){
      this.nextMatch--;
      if(this.nextMatch<0) this.nextMatch=this.arrayForMatches.length-1;
      this.searchMessage()
      console.log(this.nextMatch);
    },    

    //PER DARE ID UNIVOCI AI SINGOLI MESSAGGI
    giveId(index){
      return 'anchor'+index
    },

    ///////////////////////////////////////////
    //OPZIONI MESSAGGIO
    //////////////////////////////////////////
  
    //ogni messaggio deve avere il suo specifico menu a tendina
    openMessageOptions(index){

      //AL --PRIMO-- CLICK VENGONO TUTTI CHIUSI a prescindere
      for(let i=0;i<this.options.length;i++){
        this.options[i]=false
      }
      /* this.showMessageOptions=false */

      //CREO UN NUOVO ARRAY PER LE OPZIONI IN BASE AL NUOVO ACTIVE CHAT USER CHE SOVRASCRIVE POI IL OPTION PRECEDENTE
      let toAddOptions =[]
      for(let i =0;i<this.contacts[this.activeChatUser].messages.length;i++){
        toAddOptions.push(false)
      }
      this.options=[...toAddOptions]

      // SE NON HO MENU APERTI cambio solo la opzione in base all'index del messaggio che quindi farà cambiare il v-show
      if(!this.showMessageOptions){
        console.log(index);
      this.options[index]=true;
      this.showMessageOptions=true
      console.log(this.options);
      }else{ 
        // ALTRIMENTI RIMETTO TUTTI A FALSE COME NELLO STATO INZIALE
        for( let j=0; j<this.options.length;j++){
          this.options[j]=false
        }
        console.log(this.options);
        this.showMessageOptions=false
      } 
    },

    // AVENDO CLICCATO SU UNO SPECIFICO INDEX DI MESSAGGI, TALE INDEX APPARE TRUE NEL ARRAY OPZIONI
    showMessageOptionsfunc(index){
      return this.options[index]
    },

    //////////////////////////////////////////
    //CANCELLAZIONE MESSAGGIO
    //////////////////////////////////////////
    
    deleteSelectedMessage(index){
      // Reimposto l'array dei messaggi per il active user cancellando quello di indice index
      console.log(index);
      this.contacts[this.activeChatUser].messages.splice(index,1)
      //chiudo menu tendina
      this.openMessageOptions()
    },

    ////////////////////////////////////////////////
    // CALCOLO ULTIMA DATA, ULTIMO MESSAGGIO, ULTIMO MESSAGGIO RICEVUTO
    ///////////////////////////////////////////////

    ultimo(){
      
      let innerArrayLast=[]
      let innerArrayLastDate=[]
      let innerArrayLastReceived=[]

      for(let i =0;i<this.contacts.length;i++){
        let lastMessage='';
        let lastDate='';
        let lastReceived='';
        lastMessage = this.contacts[i].messages[this.contacts[i].messages.length-1].text;
        lastDate= this.contacts[i].messages[this.contacts[i].messages.length-1].date;

        for(let j=0;j<this.contacts[i].messages.length;j++){
          if(this.contacts[i].messages[j].status==='received'){
            lastReceived = this.contacts[i].messages[j].date
          }
        }

        

      /* console.log(lastMessage); */
      innerArrayLast.push(lastMessage)
      innerArrayLastDate.push(lastDate)

      //do a ciascun contatto un nuovo parametro
      this.contacts[i].lastmessage=lastMessage;
      this.contacts[i].lastdate=lastDate;
      this.contacts[i].lastreceived = lastReceived;
    }
    this.lastMessages=[...innerArrayLast]
    this.lastDates= [...innerArrayLastDate]
    this.lastMessages = [...innerArrayLastReceived]
    console.log(this.lastMessages);
    console.log(this.contacts)
    },

    
    numGen(min,max){
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
})
  


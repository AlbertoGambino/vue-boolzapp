function exBoolzapp(){

  new Vue ({
    el: '#app',
    data:{
      contacts: [

        {
          name: 'Michele',
          avatar:'img/Michele.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2021 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2021 15:50:00',
              text: 'Ricordagli di dare da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2021 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ],

        },
        {
          name: 'Fabio',
          avatar: 'img/Fabio.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2021 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2021 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2021 16:35:00',
              text: 'Ma certo! Neanche ci fosse il coprifuoco!',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: 'img/samuele.png',
          visible: true,
          messages: [
            {
              date: '28/03/2021 10:10:40',
              text: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2021 10:20:10',
              text: 'Hai sbagliato chat babbo',
              status: 'sent'
            },
            {
              date: '28/03/2021 16:15:22',
              text: 'sorry',
              status: 'received'
            }

          ],
        },
        {
          name: 'Luisa',
          avatar: 'img/luisa.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2021 15:30:55',
              text: 'Lo sai che hanno aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2021 15:50:00',
              text: 'Si, ma preferirei fare altro...',
              status: 'received'
            }
          ],
        },
        {
          name: 'Katia',
          avatar: 'img/Katia.png',
          visible: true,
          messages: [
            {
              date: '10/01/2021 15:30:55',
              text: 'Che fine hai fatto?',
              status: 'sent'
            },
            {
              date: '10/01/2021 15:50:00',
              text: 'Ci vediamo stasera?',
              status: 'sent'
            },
            {
              date: '10/01/2021 16:15:22',
              text: '21.30 a casa mia!',
              status: 'received'
            }
          ],

        },
        {
          name: 'Veronica',
          avatar: 'img/veronica.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2021 15:30:55',
              text: 'Luglio Tomorrowland?',
              status: 'sent'
            },
            {
              date: '10/01/2021 15:50:00',
              text: 'Non possiamo mancare',
              status: 'sent'
            },
            {
              date: '10/01/2021 16:15:22',
              text: 'Ho già prenotato!',
              status: 'received'
            }
          ],

        },
        {
          name: 'Antonio',
          avatar: 'img/antonio.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2021 15:30:55',
              text: 'Stasera torneo di PES',
              status: 'sent'
            },
            {
              date: '10/01/2021 15:50:00',
              text: 'Ti ho iscritto',
              status: 'sent'
            },
            {
              date: '10/01/2021 16:15:22',
              text: 'Vincerò',
              status: 'received'
            }
          ],

        },
        {
          name: 'Gianluca',
          avatar: 'img/gianluca.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2021 15:30:55',
              text: 'Sta uscendo il remake di Diablo',
              status: 'sent'
            },
            {
              date: '10/01/2021 15:50:00',
              text: 'a settembre...',
              status: 'sent'
            },
            {
              date: '10/01/2021 16:15:22',
              text: 'Preparati!',
              status: 'received'
            }
          ],

        },
        {
          name: 'Alessia',
          avatar: 'img/alessia.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2021 15:30:55',
              text: 'Estate a Bangkok?',
              status: 'sent'
            },
            {
              date: '10/01/2021 15:50:00',
              text: 'Paradiso vero',
              status: 'sent'
            },
            {
              date: '10/01/2021 16:15:22',
              text: 'Ho il costume giusto',
              status: 'received'
            }
          ],

        },
        {
          name: 'Peppe',
          avatar: 'img/peppe.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2021 15:30:55',
              text: 'Addio al celibato pronto!',
              status: 'sent'
            },
            {
              date: '10/01/2021 15:50:00',
              text: 'Ne vedremo delle belle',
              status: 'sent'
            },
            {
              date: '10/01/2021 16:15:22',
              text: 'Non mancherò',
              status: 'received'
            }
          ],

        },
      ],
      inputText: '',
      newMessage: {
        date:'',
        text:'',
        status:'sent',

      },
      answer:{
        date:'',
        text:'ok a dopo!',
        status:'received',
        },
      activeContact: false,
      textFilter: '',

      emoticonDisplay: false,
      emoticons: [
        {
          emoName: 'smile tears of joy',
          code: '&#128514;'
        },
        {
          emoName: 'cool',
          code: '&#128526;'
        },
        {
          emoName: 'smile smiling eyes',
          code: '&#128513;'
        },
        {
          emoName: 'smile open Mouth',
          code: '&#128515;'
        },
        {
          emoName: 'smile open mouth smiling eyes',
          code: '&#128516;'
        },
        {
          emoName: 'smile whit cold sweat',
          code: '&#128517;'
        },
        {
          emoName: 'smile open mouth closed eyes',
          code: '&#128518;'
        },
        {
          emoName: 'smile whit halo',
          code: '&#128519;'
        },
        {
          emoName: 'smile diabolic',
          code: '&#128520;'
        },
        {
          emoName: 'eye wink',
          code: '&#128521;'
        },
        {
          emoName: 'smile embarassy',
          code: '&#128522;'
        },
        {
          emoName: 'face delicious food',
          code: '&#128523;'
        },
        {
          emoName: 'face relieved',
          code: '&#128524;'
        },
        {
          emoName: 'smile face hearth',
          code: '&#128525;'
        },
        {
          emoName: 'spatty face',
          code: '&#128527;'
        },
        {
          emoName: 'neutral face',
          code: '&#128528;'
        },
        {
          emoName: 'expressionless face',
          code: '&#128529;'
        },
        {
          emoName: 'unamuse face',
          code: '&#128530;'
        },
        {
          emoName: 'face cold sweat',
          code: '&#128531;'
        },
        {
          emoName: 'pensive face',
          code: '&#128532;'
        },
        {
          emoName: 'confused face',
          code: '&#128533;'
        },
        {
          emoName: 'kissing',
          code: '&#128534;'
        },
        {
          emoName: 'kissing',
          code: '&#128535;'
        },
        {
          emoName: 'kissing',
          code: '&#128536;'
        },
        {
          emoName: 'face tongue',
          code: '&#128539;'
        },
        {
          emoName: 'face tongue',
          code: '&#128540;'
        },
        {
          emoName: 'face tongue',
          code: '&#128541;'
        },
        {
          emoName: 'pouting face',
          code: '&#128545;'
        },
        {
          emoName: 'smile tears of joy',
          code: '&#128514;'
        },
        {
          emoName: 'cool',
          code: '&#128526;'
        },
        {
          emoName: 'smile smiling eyes',
          code: '&#128513;'
        },
        {
          emoName: 'smile open Mouth',
          code: '&#128515;'
        },
        {
          emoName: 'smile open mouth smiling eyes',
          code: '&#128516;'
        },
        {
          emoName: 'smile whit cold sweat',
          code: '&#128517;'
        },
        {
          emoName: 'smile open mouth closed eyes',
          code: '&#128518;'
        },
        {
          emoName: 'smile whit halo',
          code: '&#128519;'
        },
        {
          emoName: 'smile diabolic',
          code: '&#128520;'
        },
        {
          emoName: 'eye wink',
          code: '&#128521;'
        },
        {
          emoName: 'smile embarassy',
          code: '&#128522;'
        },
        {
          emoName: 'face delicious food',
          code: '&#128523;'
        },
        {
          emoName: 'face relieved',
          code: '&#128524;'
        },
        {
          emoName: 'smile face hearth',
          code: '&#128525;'
        },
        {
          emoName: 'spatty face',
          code: '&#128527;'
        },
        {
          emoName: 'neutral face',
          code: '&#128528;'
        },
        {
          emoName: 'expressionless face',
          code: '&#128529;'
        },
        {
          emoName: 'unamuse face',
          code: '&#128530;'
        },
        {
          emoName: 'face cold sweat',
          code: '&#128531;'
        },
        {
          emoName: 'pensive face',
          code: '&#128532;'
        },
        {
          emoName: 'confused face',
          code: '&#128533;'
        },
        {
          emoName: 'kissing',
          code: '&#128534;'
        },
        {
          emoName: 'kissing',
          code: '&#128535;'
        },
        {
          emoName: 'kissing',
          code: '&#128536;'
        },
        {
          emoName: 'face tongue',
          code: '&#128539;'
        },
        {
          emoName: 'face tongue',
          code: '&#128540;'
        },
        {
          emoName: 'face tongue',
          code: '&#128541;'
        },
        {
          emoName: 'pouting face',
          code: '&#128545;'
        },
        {
          emoName: 'smile tears of joy',
          code: '&#128514;'
        },
        {
          emoName: 'cool',
          code: '&#128526;'
        },
        {
          emoName: 'smile smiling eyes',
          code: '&#128513;'
        },
        {
          emoName: 'smile open Mouth',
          code: '&#128515;'
        },
        {
          emoName: 'smile open mouth smiling eyes',
          code: '&#128516;'
        },
        {
          emoName: 'smile whit cold sweat',
          code: '&#128517;'
        },
        {
          emoName: 'smile open mouth closed eyes',
          code: '&#128518;'
        },
        {
          emoName: 'smile whit halo',
          code: '&#128519;'
        },
        {
          emoName: 'smile diabolic',
          code: '&#128520;'
        },
        {
          emoName: 'eye wink',
          code: '&#128521;'
        },
        {
          emoName: 'smile embarassy',
          code: '&#128522;'
        },
        {
          emoName: 'face delicious food',
          code: '&#128523;'
        },
        {
          emoName: 'face relieved',
          code: '&#128524;'
        },
        {
          emoName: 'smile face hearth',
          code: '&#128525;'
        },
        {
          emoName: 'spatty face',
          code: '&#128527;'
        },
        {
          emoName: 'neutral face',
          code: '&#128528;'
        },
        {
          emoName: 'expressionless face',
          code: '&#128529;'
        },
        {
          emoName: 'unamuse face',
          code: '&#128530;'
        },
        {
          emoName: 'face cold sweat',
          code: '&#128531;'
        },
        {
          emoName: 'pensive face',
          code: '&#128532;'
        },
        {
          emoName: 'confused face',
          code: '&#128533;'
        },
        {
          emoName: 'kissing',
          code: '&#128534;'
        },
        {
          emoName: 'kissing',
          code: '&#128535;'
        },
        {
          emoName: 'kissing',
          code: '&#128536;'
        },
        {
          emoName: 'face tongue',
          code: '&#128539;'
        },
        {
          emoName: 'face tongue',
          code: '&#128540;'
        },
        {
          emoName: 'face tongue',
          code: '&#128541;'
        },
        {
          emoName: 'pouting face',
          code: '&#128545;'
        },
        {
          emoName: 'smile tears of joy',
          code: '&#128514;'
        },
        {
          emoName: 'cool',
          code: '&#128526;'
        },
        {
          emoName: 'smile smiling eyes',
          code: '&#128513;'
        },
        {
          emoName: 'smile open Mouth',
          code: '&#128515;'
        },
        {
          emoName: 'smile open mouth smiling eyes',
          code: '&#128516;'
        },
        {
          emoName: 'smile whit cold sweat',
          code: '&#128517;'
        },
        {
          emoName: 'smile open mouth closed eyes',
          code: '&#128518;'
        },
        {
          emoName: 'smile whit halo',
          code: '&#128519;'
        },
        {
          emoName: 'smile diabolic',
          code: '&#128520;'
        },
        {
          emoName: 'eye wink',
          code: '&#128521;'
        },
        {
          emoName: 'smile embarassy',
          code: '&#128522;'
        },
        {
          emoName: 'face delicious food',
          code: '&#128523;'
        },
        {
          emoName: 'face relieved',
          code: '&#128524;'
        },
        {
          emoName: 'smile face hearth',
          code: '&#128525;'
        },
        {
          emoName: 'spatty face',
          code: '&#128527;'
        },
        {
          emoName: 'neutral face',
          code: '&#128528;'
        },
        {
          emoName: 'expressionless face',
          code: '&#128529;'
        },
        {
          emoName: 'unamuse face',
          code: '&#128530;'
        },
        {
          emoName: 'face cold sweat',
          code: '&#128531;'
        },
        {
          emoName: 'pensive face',
          code: '&#128532;'
        },
        {
          emoName: 'confused face',
          code: '&#128533;'
        },
        {
          emoName: 'kissing',
          code: '&#128534;'
        },
        {
          emoName: 'kissing',
          code: '&#128535;'
        },
        {
          emoName: 'kissing',
          code: '&#128536;'
        },
        {
          emoName: 'face tongue',
          code: '&#128539;'
        },
        {
          emoName: 'face tongue',
          code: '&#128540;'
        },
        {
          emoName: 'face tongue',
          code: '&#128541;'
        },
        {
          emoName: 'pouting face',
          code: '&#128545;'
        },
        {
          emoName: 'smile tears of joy',
          code: '&#128514;'
        },
        {
          emoName: 'cool',
          code: '&#128526;'
        },
        {
          emoName: 'smile smiling eyes',
          code: '&#128513;'
        },
        {
          emoName: 'smile open Mouth',
          code: '&#128515;'
        },
        {
          emoName: 'smile open mouth smiling eyes',
          code: '&#128516;'
        },
        {
          emoName: 'smile whit cold sweat',
          code: '&#128517;'
        },
        {
          emoName: 'smile open mouth closed eyes',
          code: '&#128518;'
        },
        {
          emoName: 'smile whit halo',
          code: '&#128519;'
        },
        {
          emoName: 'smile diabolic',
          code: '&#128520;'
        },
        {
          emoName: 'eye wink',
          code: '&#128521;'
        },
        {
          emoName: 'smile embarassy',
          code: '&#128522;'
        },
        {
          emoName: 'face delicious food',
          code: '&#128523;'
        },
        {
          emoName: 'face relieved',
          code: '&#128524;'
        },
        {
          emoName: 'smile face hearth',
          code: '&#128525;'
        },
        {
          emoName: 'spatty face',
          code: '&#128527;'
        },
        {
          emoName: 'neutral face',
          code: '&#128528;'
        },
        {
          emoName: 'expressionless face',
          code: '&#128529;'
        },
        {
          emoName: 'unamuse face',
          code: '&#128530;'
        },
        {
          emoName: 'face cold sweat',
          code: '&#128531;'
        },
        {
          emoName: 'pensive face',
          code: '&#128532;'
        },
        {
          emoName: 'confused face',
          code: '&#128533;'
        },
        {
          emoName: 'kissing',
          code: '&#128534;'
        },
        {
          emoName: 'kissing',
          code: '&#128535;'
        },
        {
          emoName: 'kissing',
          code: '&#128536;'
        },
        {
          emoName: 'face tongue',
          code: '&#128539;'
        },
        {
          emoName: 'face tongue',
          code: '&#128540;'
        },
        {
          emoName: 'face tongue',
          code: '&#128541;'
        },
        {
          emoName: 'pouting face',
          code: '&#128545;'
        },
        {
          emoName: 'kissing',
          code: '&#128534;'
        },
        {
          emoName: 'kissing',
          code: '&#128535;'
        },
        {
          emoName: 'kissing',
          code: '&#128536;'
        },
        {
          emoName: 'face tongue',
          code: '&#128539;'
        },
        {
          emoName: 'face tongue',
          code: '&#128540;'
        },
        {
          emoName: 'face tongue',
          code: '&#128541;'
        },
        {
          emoName: 'pouting face',
          code: '&#128545;'
        },
      ],
    },
    computed:{
      filteredContacts: function(){


        // const resContacts = [];
        // for (let i = 0; i < this.contacts.length; i++){
        //
        //   const contact = this.contacts[i];
        //   const name = contact['name'];
        //
        //   if(name.toLowerCase().includes(this.textFilter.toLowerCase())){
        //
        //     resContacts.push(contact)
        //
        //   }
        // }
        //
        // return resContacts
        return this.contacts.filter(contact => {
          return contact.name.toLowerCase().includes(this.textFilter.toLowerCase());
        });

      },
    },
    methods: {
      getContact: function(contact){
        this.activeContact = contact
        // this.activeContact = index;
        this.$nextTick(() => this.$refs.inputFocus.focus());

      },
      sendNewMessage:function(){

        this.newMessage['text'] = this.inputText

        var oggi = new Date()
        var adesso = oggi.getDate() + '/' + oggi.getMonth() + '/' + oggi.getFullYear() + ' ' + oggi.getHours() + ':' + oggi.getMinutes() + ':' + oggi.getSeconds()

        this.newMessage['date'] = adesso

        this.activeContact.messages.push({...this.newMessage})

        // this.contacts[this.activeContact].messages.push({...this.newMessage})

        this.inputText = '';

        /* -------------------- */

        if (this.emoticonDisplay == true) {
          this.emoticonDisplay = false;
        }

        setTimeout(this.answerOk, 1000)
      },
      answerOk: function(){

        var oggi = new Date()
        var adesso = oggi.getDate() + '/' + oggi.getMonth() + '/' + oggi.getFullYear() + ' ' + oggi.getHours() + ':' + oggi.getMinutes() + ':' + oggi.getSeconds()

        this.answer['date'] = adesso

        this.activeContact.messages.push({...this.answer})

        // this.contacts[this.activeContact].messages.push({...this.answer})

      },

      clickEmoticonsMenu: function () {

        // funzione cambia display lista emoticon
        this.emoticonDisplay = !this.emoticonDisplay;

      },
      clickEmoticon: function (emoji) {
        
        this.inputText += emoji.code;
        // dopo il click emoticon il focus torna sul input per scrivere il messaggio
        this.$nextTick(() => this.$refs.inputFocus.focus());
      },
  },

 
})

}

function init(){

    console.log('hello');
    exBoolzapp()

}
$(init);

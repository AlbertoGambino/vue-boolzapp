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
              text: 'Ma certo! fottiamocene del coprifuoco!',
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
      ],
      newMessage: ''
    },
    methods: {

      
  }
})

}

function init(){

    console.log('hello');
    exBoolzapp()

}
$(init);

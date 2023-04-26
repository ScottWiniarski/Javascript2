<template>
<!--  <p id="itunesdata" :is="displayData"></p>-->
</template>

<script>
//import ItunesCollectionFactory from '@/models/ItunesCollectionFactory';

export default {
  name: "DisplayFromArray.vue",
  /*props:{
    items: Object,
  },
  components: {},

  methods: {
    displayData(items) {
      $('#itunesdata').html('');
      items.forEach(item => {
        if(item instanceof Song){
          $('#itunesdata').append(`<p>${item.artistId}</p>`,
              `<p>${item.artistName}</p>`,
              `<img src="${item.artworkUrl100}">`);
        }
        else if(item instanceof Movie){
          $('#itunesdata').append(`<p>${item.collectionId}</p>`,
          `<p>${item.trackName}</p>`,
          `<img src="${item.artworkUrl100}">`);
        }

      })
    }
  },*/

//   computed:{
//     $('#itunesdata').html('');
//     items.forEach(item => {
//   if(item instanceof Song){
//     $('#itunesdata').append(`<p>${item.artistId}</p>`,
//         `<p>${item.artistName}</p>`,
//         `<img src="${item.artworkUrl100}">`);
//     // $('#itunesdata').append(`<p>${{item.artistName}}</p>`),
//     // $('#itunesdata').append(`<img src="${{item.artworkUrl100}}">`)
//   }
//   else if(item instanceof Movie){
//     $('#itunesdata').append(`<p>${item.collectionId}</p>`,
//         `<p>${item.trackName}</p>`,
//         `<img src="${item.artworkUrl100}">`);
//   }
//
// })
//   },
}
</script>

<style scoped>

</style>

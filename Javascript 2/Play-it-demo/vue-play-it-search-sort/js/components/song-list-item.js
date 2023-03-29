app.component('SongListItem', {
    data(){
        return {

        }
    },

    props: {
        song: Song,
        //currentSong: Song, // "Messy" SongListItem needs to know how to update current song.
        //updateCurrentSong: Function,
    },

    computed: {
        formattedRuntime(){
            let minutes = Math.floor(this.song.runtime / 60);
            return minutes + ':' + (this.song.runtime - (minutes * 60));
        }
    },

    mounted(){

    },

    template: `
      <q-item clickable @click="$emit('play-song', song);">
      <q-item-section side>
        {{song.rating}}
      </q-item-section>
      <q-item-section>
        <q-item-label>{{song.title}}</q-item-label>
        <q-item-label caption>{{song.artist}}</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>{{formattedRuntime}}</q-item-label>
      </q-item-section>
      </q-item>
    `
})

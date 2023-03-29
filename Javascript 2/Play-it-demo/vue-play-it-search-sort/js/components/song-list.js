app.component('SongList', {
    // like a constructor,
    // called when the component is created
    data() {
        return {
            filteredSongs: [...this.songs],
            filteredKeyword: '',
        }
    },

    methods: {
        sort(property) {
            console.log('Sorting by: ' + property);

            if (property === 'title') {
                this.songs.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            } else if (property === 'artist') {
                this.songs.sort((a, b) => {
                    if (a.artist.toLowerCase() < b.artist.toLowerCase()) {
                        return -1;
                    } else if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            }
        },

        search(keyword){
            this.filteredKeyword = keyword;
            /*this.filteredSongs = this.songs.filter((song) => {
                return song.title.toLowerCase().includes(keyword.toLowerCase()) ||
                    song.artist.toLowerCase().includes(keyword.toLowerCase());
            })*/
        },
    },

    computed:{
      automagicallyFilteredSongs(){
          return this.songs.filter((song)=> {
              return song.title.toLowerCase().includes(this.filteredKeyword.toLowerCase()) ||
                  song.artist.toLowerCase().includes(this.filteredKeyword.toLowerCase());
          })
      }
    },
    props: {
        songs: Array,
    },

    template: `
      <div>
      <div class="row justify-between">
        <div class="col-5 col-sm-4">
          <sort-form :sort-function="sort"></sort-form>
        </div>
        <div class="col-6 col-md-4">
          <search-form :search-function="search"></search-form>
        </div>
      </div>
      <q-list bordered separator>
        <song-list-item
            v-for="song in automagicallyFilteredSongs"
            :song="song"
            :key="song.id"
            @play-song="(emittedSong) => {$emit('play-song', emittedSong)}"
        ></song-list-item>
      </q-list>
      </div>
      
    `
})

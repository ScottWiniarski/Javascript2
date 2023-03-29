const app = Vue.createApp({
    data(){
        let songs = [
            new Song('Flowers', 'Miley Cyrus', 200),
            new Song('Kill Bill', 'SZA', 153),
            new Song('Eyes Closed', 'Ed Sheeran', 196),
            new Song('Last Night', 'Morgan Wallen', 163),
            new Song('Die For You', 'The Weekend & Ariana Grande', 173),
        ];

        return {
            songs: songs,
            currentSong: songs[0],
        }
    },
})

/**
 * TODO:
 * 1. Set currently playing song on click with emits
 * 2. Change runtime from seconds to mm:ss
 * 3. Filter songs with function props
 * 4. Sort songs with function props
 * 5. De-stinkify
 */

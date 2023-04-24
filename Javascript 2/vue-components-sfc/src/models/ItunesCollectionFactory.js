import Song from "@/models/Song";
import Movie from "@/models/Movie";

export default class ItunesCollectionFactory {
    static CreateFromItunesMedia(mediaItem) {
        const collection = new ItunesCollection();
        const ITUNES_KIND = {
            MOVIE: 'feature-movie',
            SONG: 'song',
            TVEPISODE: 'tv-episode'
        };
        const ITUNES_WRAPPERTYPE = {
            TRACK: 'track',
            COLLECTION: 'collection',
            ARTIST: 'artist',
            AUDIOBOOK: 'audiobook'
        };

        mediaItem.forEach(item => {
            let newItem = false;
            switch (item.wrapperType.toLowerCase()) {
                case ITUNES_WRAPPERTYPE.TRACK:
                    switch (item.kind.toLowerCase()) {
                        case ITUNES_KIND.SONG:
                            newItem = Object.assign(new Song(), item);
                            break;
                        case ITUNES_KIND.MOVIE:
                            newItem = Object.assign(new Movie(), item);
                            break;
                        default:
                            console.warn('Something beyond song/movie kind.', item);
                    }
                    break;
                case ITUNES_WRAPPERTYPE.COLLECTION:
                    switch (item.kind.toLowerCase()){
                        case ITUNES_KIND.TVEPISODE:
                            break;
                    }
                    break;
                default :
                    console.warn('Something beyond track wrapperType', item);
            }
            if (newItem) {
                collection.add(newItem);
            }
        })
        return collection;
    }
}
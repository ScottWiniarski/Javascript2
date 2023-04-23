class ItunesCollectionFactory {
    static CreateFromItunesMedia(mediaItem) {
        const collection = new ItunesCollection();
        const ITUNES_KIND = {
            MOVIE: 'feature-movie'.toLowerCase(),
            SONG: 'song'.toLowerCase(),
            TVEPISODE: 'tv-episode'.toLowerCase()
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
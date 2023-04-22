class ItunesCollectionFactory {
    static createFromItunesMedia(mediaItem){
        const collection = new ItunesCollection();
        const ITUNES_KIND = {MOVIE: 'movie'.toLowerCase(), SONG: 'song'.toLowerCase()}

        mediaItem.forEach(item => {
            let newItem = false;
            switch (item.kind.toLowerCase()){
                case ITUNES_KIND.MOVIE:
                    newItem = Object.assign(new Movie(), item);
                    break;
                case ITUNES_KIND.SONG:
                    newItem = Object.assign(new Song(), item);
                    break;
                default :
                    console.warn('Something beyond Movie or Song', item);

            }
            if(newItem){
                collection.add(newItem);
            }
        })
        return collection;
    }
}
export default class Song {
    static type = 'Song';

    get type(){
        return Song.type;
    }

    // Kind: song

    wrapperType = ' ';
    kind= "";
    artistId= 0;
    collectionId= 0;
    trackId= 0;
    artistName= "";
    collectionName= "";
    trackName= "";
    collectionCensoredName= "";
    trackCensoredName= "";
    artistViewUrl= "";
    collectionViewUrl= "";
    trackViewUrl= "";
    previewUrl= "";
    artworkUrl30= "";
    artworkUrl60= "";
    artworkUrl100= "";
    collectionPrice= 0;
    trackPrice= 0;
    releaseDate= "";
    collectionExplicitness= "";
    trackExplicitness= "";
    discCount= 0;
    discNumber= 0;
    trackCount= 0;
    trackNumber= 0;
    trackTimeMillis= 0;
    country= "";
    currency= "";
    primaryGenreName= "";
    isStreamable=Boolean;

    get thumbnail(){
        return this.artworkUrl100?.replace(`&edge=curl`, '')
    }
}
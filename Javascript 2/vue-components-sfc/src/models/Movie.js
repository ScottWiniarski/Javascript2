class Movie {
    static type = 'Movie';

    get type(){
        return Movie.type;
    }
    // kind: feature-movie;
    // Types are not supported by JavaScript Version

    wrapperType: '';
    kind = '';
    collectionId: '';
    trackId: '';
    artistName: '';
    collectionName: '';
    trackName: '';
    collectionCensoredName: "";
    trackCensoredName: '';
    collectionArtistId: 0;
    collectionArtistViewUrl: "";
    collectionViewUrl: "";
    trackViewUrl: "";
    previewUrl: "";
    artworkUrl30: "";
    artworkUrl60: "";
    artworkUrl100: "";
    collectionPrice: 0;
    trackPrice: 0;
    trackRentalPrice: 0;
    collectionHdPrice: 0;
    trackHdPrice: 0;
    trackHdRentalPrice: 0;
    releaseDate: "";
    collectionExplicitness: "";
    trackExplicitness: "";
    discCount: 0;
    discNumber: 0;
    trackCount: 0;
    trackNumber: 0;
    trackTimeMillis: 0;
    country: "";
    currency: "";
    primaryGenreName: "";
    contentAdvisoryRating: "";
    longDescription: '';

    get thumbnail(){
        return this.artworkUrl100?.replace(`&edge=curl`, '')
    }
}
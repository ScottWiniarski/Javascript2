class ItunesMedia {
    static search(searchTerm, limit){
        let endpoint = 'https://itunes.apple.com/search';
        let params = {
            term: searchTerm,
            media: 'all',
            limit: limit,
        }

        return axios.get(endpoint, {params})
    }
}
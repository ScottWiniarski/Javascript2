import axios from 'axios';

export default class ItunesMedia {
    static search(searchTerm, limit){
        let endpoint = 'https://itunes.apple.com/search';
        let params = {
            term: searchTerm,
            media: 'all',
            limit: limit,
        }
        console.log(endpoint, {params})
        return axios.get(endpoint, {params});
    }
}
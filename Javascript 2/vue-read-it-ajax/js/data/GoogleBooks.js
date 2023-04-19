class GoogleBooks {
    static search(keyword, limit){
        // TODO: build request arguments
        let endpoint = 'https://www.googleapis.com/books/v1/volumes';
        let params = {
            q: keyword,
            filter: 'partial',
            maxResults: limit ?? 36,
        }

        let config = {
            params: params,
        }
        // TODO: execute ajax request using promises
        // axios.get(endpoint, {params}) or
        return axios.get(endpoint, config)
    }
}
// get function in postman https://itunes.apple.com/search?term=Gorillaz&media=music&entity=musicVideo&limit=10

$(document).ready(function () {
    let searchTerm = 'Gorillaz';

    let endpoint = 'https://itunes.apple.com/search';
    let params = {
        term: searchTerm,
        filter: 'full',
        limit: 10,

    }
    $.get(
        endpoint,
        params,
        function (data) {
            console.log('response,', data);

            $('#results').html('');

            data.results.forEach(result => {
                //$('#results').append(`<h3>${result.artistName.results}`);
                //$('#results').append(`<h3>${result.results}</h3>`);
                $('#results').append(`<h3>${result.artistName}</h3>`);
            });
        },
        'json'
    );
    console.log('done loading');
});
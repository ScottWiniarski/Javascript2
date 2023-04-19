// get function in postman https://itunes.apple.com/search?term=Gorillaz&media=music&entity=musicVideo&limit=10

/*$(document).ready(function () {
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
                $('#results').append(`<h3>${result.artistName}</h3>`);

                $('#results').append(`<h3>${result.artistId}</h3>`);

                if(results.artworkUrl130){
                    $('#results').append(`<img src="${result.artworkUrl100}">`);
                }


            });
        },
        'json'
    );
    console.log('done loading');
});*/

$('#searchBar').on('submit', function (e) {
    e.preventDefault();
    console.log('in function');
    let searchTerm = $('#searchTerm').val();
    console.log(searchTerm);
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
                $('#results').append(`<h3>${result.artistName}</h3>`);

                $('#results').append(`<h3>${result.artistId}</h3>`);

                if(result.artworkUrl100){
                    $('#results').append(`<img src="${result.artworkUrl100}">`);
                }
            });
        },
        'json'
    );
});
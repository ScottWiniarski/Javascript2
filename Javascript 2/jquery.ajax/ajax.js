
// url entered into postman: https://www.googleapis.com/books/v1/volumes?q=javascript&filter=full

// run when the page loads
$(document).ready(function () {
    let searchTerm = 'javascript'; // this could come from a form

    let endpoint = 'https://www.googleapis.com/books/v1/volumes';
    let params = {
        q: searchTerm,
        filter: 'full',
    }

    $.get(
        endpoint,
        params,
        function (data) {
            // this is called in the future, when a response is retrieved
            console.log('response', data);

            $('#results').html('');

            data.items.forEach(item => {
                $('#results').append(`<h3>${item.volumeInfo.title}</h3>`);

                // with concatenation
                if (item.volumeInfo.authors) {
                    $('#results').append('<p>By: ' + item.volumeInfo.authors.join(', ') + '</p>');
                }
                // or, in the event that something doesn't exist.
                $('#results').append('<p>By: ' + (item.volumeInfo?.authors?.join(', ') ?? 'N/A') + '</p>');

                if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) {
                    $('#results').append(`<img src="${item.volumeInfo.imageLinks.smallThumbnail}">`);
                }
            });

        },
        'json' // could also be html, xml or text
    );

    console.log('done loading');
});

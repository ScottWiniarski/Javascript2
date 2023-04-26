function Book(title, pages){
    this.title = title ?? "Default Title";
    this.pages = pages ?? 0;
}
Book.type = 'Book';

class Movie  {
    static type = 'Movie';
    title = '';
    runtime = 0;

    constructor(title, runtime){
        this.title = title ?? '';
        this.runtime = runtime ?? 0;
    }
}

export {Book, Movie};
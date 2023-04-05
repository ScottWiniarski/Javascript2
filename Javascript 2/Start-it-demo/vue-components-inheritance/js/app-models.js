// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those).
// Prototypes are simply objects that define a template for future objects.

// Prototypes/Classes use TitleCase for naming
function LibraryItem(title){
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out', ON_HOLD: 'hold'}
    this.title = title ?? '';
    //console.log(title, arguments);

     // set the default status
    this.status = STATUSES.CHECKED_IN;

    // methods
    this.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    this.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    this.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }
}

// Book extends LibraryItem
function Book(title, pages){
    // this refers to the library time, but the Book version. 'this' actually refers to the Book function.
    LibraryItem.call(this, title);
    // an additional object type
    //Product.call(this, title);

    // add any additional properties
    this.pages = pages ?? 0;
}
// set the parent/prototype
Book.prototype = Object.create(LibraryItem.prototype);
Book.prototype.constructor = Book;

// to deal with the compiler problem with pages 2 in the html
Book.type = 'Book';

class Movie extends LibraryItem {
    runtime = 0;
    // Also deals with compiler problem for runtime 2.
    static type = 'Movie';

    constructor(title, runtime){
        super(title); // similar to LibraryItem.call()

        this.runtime = runtime ?? 0;
    }
}

let book = new Book('Book Title', 123);
let movie = new Movie('Movie Title', 99);
console.log(book, movie)

// 1. Use these models in our components
// 2. Add additional properties
// 3. Identify code smells and fix

// more info on factories:
// https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d

class PublicationCollectionFactory {
    // Static methods can be called without creating an instance.
    // For example: PublicationCollectionFactory.createFromGoogleBooks(...)
    // will return a new PublicationCollection
    static createFromGoogleBooks(volumes){
        // TODO: create factory method
        const collection = new PublicationCollection();
        // add items to the collection
        volumes.forEach(item => {
            let newItem = false;
            switch (item.volumeInfo.printType.toLowerCase()){
                case 'book':
                    newItem = Object.assign(new Book(), item);
                    // if mapping fields
                    // newItem = new Book;
                    // newItem.title = item.volumeInfo.title;
                    break;
                case 'magazine':
                    newItem = Object.assign(new Magazine(), item);
                    break;
                default :
                    console.warn('Found something other than a book/mag', item);
            }
            if(newItem) {
                collection.add(newItem);
            }
        })
        return collection;
    }

    static createFromLocalStorage(items){
        // currently this is no different, but could be in the future
        return this.createFromGoogleBooks(items);
    }
}

class ItunesCollection {
    _arr;

    constructor(arr) {
        if (!Array.isArray(arr)) {
            arr = [];
        }

        this._arr = arr;
    }
    // Methods copied from PublicationCollection demo
    add(media){
        return this._arr.push(media);
    };

    _findItem(media){
        return this._arr.findIndex(function(item){
            return item.id === media.id;
        })
    };

    remove(media){
        return this._arr.splice(this._findItem(media), 1);
    };

    contains(media){
        return this._findItem(media) >= 0;
    };

    get count(){
        return this._arr.length;
    };

    get items(){
        return [...this._arr]
    };
}
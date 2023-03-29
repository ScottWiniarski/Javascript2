function Song(title, artist, runtime){
    this.id = generateId();
    this.rating = this.id; // just for demo purposes
    this.title = title ?? '';
    this.artist = artist ?? '';
    this.runtime = runtime ?? '';
}

function generateId(){
    generateId.counter = generateId.counter ?? 1;
    return generateId.counter++;
}

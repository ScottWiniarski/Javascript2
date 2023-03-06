function Timer(title, date, legendary){
    // convert YYYY-MM-DD HH:mm to Date object
    this.updateDate = function(){
        let d = this.dateString.split(/[^0-9]/);
        this.date = new Date(d[0]-0,d[1]-1,d[2]-0,d[3]-0,d[4]-0 );
    }

    this.id = generateId();
    this.title = title ?? '';
    this.dateString = date ?? ''; // YYYY-MM-DD HH:mm
    this.updateDate(); // set date object
    this.legendary = legendary ?? false;
}

function generateId(){
    generateId.counter = generateId.counter ?? 1;
    return generateId.counter++;
}

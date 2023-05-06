/*class Miner {
    static type = 'Miner';

    get type(){
        return Miner.type;
    }

    firstName = '';
    lastName = '';
    employeeId = 0;
    dailyYield = 0;
    maxYield = 100;

    constructor(firstName, lastName, employeeId, maxYield){
        this.firstName = firstName ?? '[Redacted]';
        this.lastName = lastName ?? '[Redacted]';
        this.employeeId = employeeId ?? 0;
        this.maxYield = maxYield ?? 100;
    }

    increaseYield(dailyYield, maxYield){
        if(dailyYield > maxYield){
            return this.maxYield = dailyYield;
        }
    }
}*/


function Miner(firstName, lastName, maxYield, daysEmployed, strikes){
    this.employeeId='';
    this.firstName = firstName ?? 'NA';
    this.lastName = lastName ?? 'NA';
    this.maxYield = maxYield ?? 0;
    this.daysEmployed = daysEmployed ?? 0;
    this.strikes = strikes ?? 0;

    this._path = '';

    this.toString = function(){
        return this.lastName;
    }

    this.toFirestore = function(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            maxYield: this.maxYield,
            daysEmployed: this.daysEmployed,
            strikes: this.strikes,
        }
    }
}

Miner.collectionName = 'Miners';

Miner.fromFirestore = function (snapshot, options){
    const data = snapshot.data(options);
    const miner = new Miner(data.firstName, data.lastName, data.maxYield, data.daysEmployed, data.strikes);

    miner.employeeId = snapshot.id;
    miner._path = snapshot.ref.path;

    return miner;
}
export default Miner;
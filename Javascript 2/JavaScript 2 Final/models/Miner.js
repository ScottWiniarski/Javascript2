class Miner {
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
}

export {Miner};
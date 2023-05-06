export default function Employee(employee) {
    const STATUSES = {EMPLOYED: true, NOTEMPLOYED: false }

    employee.status = STATUSES.EMPLOYED;

    employee.employ = function(){
        this.status = STATUSES.EMPLOYED;
    }

    employee.fire = function(){
        this.status = STATUSES.NOTEMPLOYED;
    }

    return employee;
}

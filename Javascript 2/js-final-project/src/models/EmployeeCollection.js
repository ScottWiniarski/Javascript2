import Employee from "./Employee";
// import Employee from "@/models/Employee.js"

function EmployeeCollection(){
    let roster = [];

    roster.addEmployee = function(employee){
        this.push(new Employee(employee));
        return this;
    }
    return roster;
}

export default EmployeeCollection;

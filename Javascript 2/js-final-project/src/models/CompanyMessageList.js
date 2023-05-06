import CompanyMessage from "./CompanyMessage"

function CompanyMessageList(){
    let folder = [];

    folder.addItem = function(item){
        this.push(new CompanyMessage(item));
        return this;
    }
    return folder;
}

export default CompanyMessageList;
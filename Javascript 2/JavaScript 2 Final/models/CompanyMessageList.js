import CompanyMessage from "./CompanyMessage"

function CompanyMessageList(){
    let folder = [];

    folder.addItem = function(message, content, wasSeen){
        this.push(new CompanyMessage(message, content, wasSeen));
        return this;
    }
    return folder;
}

export default CompanyMessageList;
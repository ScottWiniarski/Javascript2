import {CompanyMessage} from "./CompanyMessage"

function CompanyMessageList(){
    let folder = [];

    folder.addItem = function(messageId, message, content, wasSeen){
        this.push(new CompanyMessage(messageId, message, content, wasSeen));
        return this;
    }
    return folder;
}

export default CompanyMessageList;
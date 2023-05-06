/*class CompanyMessage{
    static type = 'CompanyMessage';

    get type(){
        return CompanyMessage.type;
    }

    messageTitle = '';
    messageContent = '';
    wasSeen;
    messageId;

    constructor(messageId, messageTitle, messageContent, wasSeen){
        this.messageId = messageId ?? 0;
        this.messageTitle = messageTitle ?? '[Redacted]';
        this.messageContent = messageContent ?? '[Redacted]';
        this.wasSeen = wasSeen ?? false;
    }
}
export {CompanyMessage};*/

function CompanyMessage(messageTitle, messageContent, wasSeen){
    this.id='';
    this.messageTitle = messageTitle ?? 'N/A';
    this.messageContent = messageContent ?? 'N/A';
    this.wasSeen = wasSeen;

    this._path = '';

    this.toString = function (){
        return this.messageTitle;
    }

    this.toFirestore = function(){
        return {
            messageTitle: this.messageTitle,
            messageContent: this.messageContent,
            wasSeen: this.wasSeen,
        }
    }
}
CompanyMessage.collectionName = 'CompanyMessages';

CompanyMessage.fromFirestore = function(snapshot, options) {
    const data = snapshot.data(options);
    const companyMessage = new CompanyMessage(data.messageTitle, data.messageContent, data.wasSeen);

    companyMessage.id = snapshot.id;
    companyMessage._path = snapshot.ref.path;

    return companyMessage;
}
export default CompanyMessage;

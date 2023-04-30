class CompanyMessage{
    static type = 'CompanyMessage';

    get type(){
        return CompanyMessage.type;
    }

    messageTitle = '';
    messageContent = '';
    wasSeen = false;

    constructor(messageTitle, messageContent, wasSeen){
        this.messageTitle = messageTitle ?? '[Redacted]';
        this.messageContent = messageContent ?? '[Redacted]';
        this.wasSeen = wasSeen ?? false;
    }
}
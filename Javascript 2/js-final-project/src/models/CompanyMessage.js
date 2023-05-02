class CompanyMessage{
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

export {CompanyMessage};
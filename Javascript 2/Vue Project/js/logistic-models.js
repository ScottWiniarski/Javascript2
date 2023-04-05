function InventoryItem(title){
    const STATUSES = {PENDING: 'pending', RECEIVED: 'received', SHIPPED:'shipped'}
    this.title = title ?? 'Not Available';

    this.status = STATUSES.PENDING;

    this.inHand = function(){
        this.status = STATUSES.RECEIVED;
    }

    this.sentOut = function(){
        this.status = STATUSES.SHIPPED;
    }
}

function Ale(title, servingSize){
    InventoryItem.call(this, title);

    this.servingSize = servingSize ?? 'big';
}
function InventoryItem(material){
    this.material = material;
}

function ReceivingItem(title, productId, status, priority){
    this.title = title ?? 'Default Title';
    this.productId = productId ?? 0;
    // let fieldName = 'productId';
    // this[fieldName] = productId ?? 0;
    this.status = status ?? 'N/A';
    this.priority = priority ?? "N/A";
}
ReceivingItem.type = 'ReceivingItem';
ReceivingItem.fields = [
    {label: 'Title', property: 'title'},
    {label: 'Product ID', property: 'productId'},
    {label: 'Status', property: 'status'},
    {label: 'Priority', property: 'priority'},

]

class ShippingItem {
    static type = "ShippingItem"
    title = '';
    productId = 0;
    status = 'N/A';
    priority = 'N/A'

    constructor(title, productId, status, priority) {
        this.title = title ?? 'Default Title';
        this.productId = productId ?? 0;
        this.status = status ?? 'N/A';
        this.priority = priority ?? "N/A";
    }
}
ShippingItem.fields = [
    {label: 'Title', property: 'title'},
    {label: 'Product ID', property: 'productId'},
    {label: 'Status', property: 'status'},
    {label: 'Priority', property: 'priority'},

]

// let receivingItem = new InventoryItem( new ReceivingItem('Iron Ore', 231093, "received", 'High'));
// let shippingItem = new InventoryItem( new ShippingItem('Steel I-Beam', 323810, 'shipped', 'High'));
// console.log(receivingItem.material.title);
// console.log(receivingItem, shippingItem);
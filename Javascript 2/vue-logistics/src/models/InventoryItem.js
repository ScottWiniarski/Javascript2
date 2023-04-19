function InventoryItem(material){
    this.material = material;
    this.id = InventoryItem.nextId++;
}

InventoryItem.nextId = 0;

export default InventoryItem;
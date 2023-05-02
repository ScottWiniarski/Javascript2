import MiningCart from "./MiningCart";
//import MiningCart from "@/models/MiningCart"

function ResourceCollection(){
    let inventory = [];

    inventory.addItem = function (item){
        this.push(new MiningCart(item));
        return this;
    }
    return inventory;
}

export default ResourceCollection;
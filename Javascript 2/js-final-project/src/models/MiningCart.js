export default function MiningCart(resource){
    const STATUSES = {LOADED: true, UNLOADED: false}

    resource.status = STATUSES.LOADED;

    resource.load = function(){
        this.status = STATUSES.LOADED;
    }

    resource.unload = function(){
        this.status = STATUSES.UNLOADED;
    }
}
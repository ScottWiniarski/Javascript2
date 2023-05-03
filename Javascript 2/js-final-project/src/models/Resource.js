/*class Resource{
    static type = 'Resource';

    get type(){
        return Resource.type;
    }

    resourceName = '';
    resourceValue = 0;
    resourceId;

    // use an image like the turkey example for FireBase?
    resourceImage = '';

    constructor(resourceId, resourceName, resourceValue) {
        this.resourceId = resourceId ?? 0;
        this.resourceName = resourceName ?? 'N/A';
        this.resourceValue = resourceValue ?? 0;
    }
}
export {Resource};*/

function Resource(resourceName, resourceValue){
    this.id='';
    this.resourceName = resourceName ?? 'NA';
    this.resourceValue = resourceValue ?? 0;

    this._path = '';

    this.toString = function (){
        return this.resourceName;
    }

    this.toFirestore = function (){
        return {
            resourceName: this.resourceName,
            resourceValue: this.resourceValue,
        }
    }
}

Resource.collectionName = 'Resources';

Resource.fromFirestore = function (snapshot, options){
    const data = snapshot.data(options);
    const resource = new Resource(data.resourceName, data.resourceValue);

    resource.id = snapshot.id;
    resource._path = snapshot.ref.path;

    return resource;
}
export default Resource;
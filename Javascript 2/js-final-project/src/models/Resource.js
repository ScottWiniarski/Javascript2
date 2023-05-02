class Resource{
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

export {Resource};
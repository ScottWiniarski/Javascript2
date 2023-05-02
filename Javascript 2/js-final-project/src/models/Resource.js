class Resource{
    static type = 'Resource';

    get type(){
        return Resource.type;
    }

    resourceName = '';
    resourceValue = 0;

    // use an image like the turkey example for FireBase?
    resourceImage = '';

    constructor(resourceName, resourceValue) {
        this.resourceName = resourceName ?? 'N/A';
        this.resourceValue = resourceValue ?? 0;
    }
}

export {Resource};
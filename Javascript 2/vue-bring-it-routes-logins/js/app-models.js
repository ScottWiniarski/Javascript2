// Models
function User(firebaseUser){
    let m = {
        displayName: '',
        email: '',
        photoURL: '',
        uid: '',
    }

    if(firebaseUser){
        m.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
        m.email = firebaseUser.email ? firebaseUser.email : '';
        m.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
        m.uid = firebaseUser.uid ? firebaseUser.uid : '';
    }

    return m;
}

function Need(){
    return {
        name: '',
        datetime: new Date(),
        createdBy: null,
        assignedTo: null,
    }
};

function Potluck(){
    return {
        name: '',
        datetime: new Date(),
        description: '',
        location: '',
        createdBy: null,
        users: []
    }
};

function Guest(){
    return {
        user: null,
        datetime: new Date(),
    }
};




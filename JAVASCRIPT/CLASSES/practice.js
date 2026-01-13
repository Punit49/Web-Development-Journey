class parent {
    constructor(user, email){
        this.user = user;
        this.email = email;
    }

    viewData(){
        console.log(`User: ${this.user} \nEmail: ${this.email}`);
    }
}

class admin extends parent{
    editdata(data1, data2){
        super(data1, data2);
    }
}

let newobj = new admin();
console.log(newobj);

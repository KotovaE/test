function User () {
    let user = {
        name: 'jack'
    }

    this.name = 'Denis';
    this.user = user;
  
    return this;
}

function NewUser(name){
    this.name = name;
}



//alert(user.name);

//console.log(new User());    // {    name: 'denis',    user: {name:'jack'}}

//alert(new User().user.name);  // Jack
//alert({ name: 'denis', user: {name:'jack'}}.user.name);





//alert(User)

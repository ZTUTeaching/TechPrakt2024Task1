
class User {
    #login;
    #password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    getLogin() {
        console.log(this);
        return this.#login;
    }

    testPassword(password) {
        return this.#password === password;
    }
    display() {
        console.log(this.#login);
    }
}

class Admin extends User {
    #role;

    constructor(login, password, role) {
        super(login, password);
        this.#role = role;
    }
}
const user = new User('admin', '123456');

let panelParams = {
    //width : 300,
    title : 'Title',
    height : 200,
    age : 30
};

let {title, height} = panelParams;
let [id, title, count, price] = [1, 'title', 10, 10,5];
let x = 1;
let y = 2;
[x, y] = [y, x];



function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
/*let arr2 = [1,2,3,4,5];
func2(...arr2);*/

/*
let myf = user.getLogin;
console.log(myf.bind(user));

console.log(user.getLogin());
const admin = new Admin('admin', '123456', 'all');
*/
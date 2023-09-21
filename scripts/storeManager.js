// saving our values and users to the local storage
const KEY = "users";

function saveUser(user){
    let users = readUsers(); // previous users
    users.push(user); // joining new users with the users list.
    let val = JSON.stringify(users); // 
    // turns it all into a string

    localStorage.setItem(KEY, val);
}

function readUsers(){
    let data = localStorage.getItem(KEY);

    if (!data){// no data? the question asking with the exclimation point
        return []; // creating an array
    }else{
        let userList=JSON.parse(data);
        return userList;
    }
    // get the users and display them in the console or wherever we need it 
}
function login(){
    console.log("login");
    let email = $("#txtEmail").val();
    let pass = $("#txtPass").val();
    console.log(email, pass); // test it
    let flag = true;
// get the users from LS
    let usersArray = readUsers() //
    console.log(usersArray);
    for (let i = 0; i < usersArray.length; i++) {
        let user=usersArray[i];
        if (email==user.email && pass==user.password){ // both must be correct
            window.location="users.html"; // redirects them to that page
            flag = true;
        }else{
            flag = false;
        }
        
    }
    if(flag==false){
        alert("invalid credentials");
    }
}

function init(){
    $("#btnLogin").click(login)
}

window.onload=init;

//1. create the constructor
function User(email,password,fName,lName,age,g1,g2,g3){
    this.email=email; //*
    this.password=password; //*
    this.fName=fName; //*
    this.lName=lName;
    this.age=age;
    this.g1=g1; //*
    this.g2=g2; //*
    this.g3=g3; //*
    //this.id=x++ // automatically asign id so we can delete later if we need
};
// create validation function

function isValid(aUser){
    let validation = true; // assuming all is fine
    // if all fine remove allert
    inputEmail.classList.remove("alert-error");
    inputPass.classList.remove("alert-error");
    inputFName.classList.remove("alert-error");
    input101.classList.remove("alert-error");
    input102.classList.remove("alert-error");
    input103.classList.remove("alert-error");
// create if input is empty then add the class alert 
    if(aUser.email==""){
        validdation=false;
        inputEmail.classList.add("alert-error");
    };
    if(aUser.password==""){
        validdation=false;
        inputPass.classList.add("alert-error");
    };
    if(aUser.fName==""){
        validdation=false;
        inputfName.classList.add("alert-error");
    };
    if(aUser.g1==""){
        validdation=false;
        input101.classList.add("alert-error");
    };
    if(aUser.g2==""){
        validdation=false;
        input102.classList.add("alert-error");
    };
    if(aUser.g3==""){
        validdation=false;
        input103.classList.add("alert-error");
    };

}

function register(){
    // getting the value from the inputs
    // when we trigger the function with a click
    let inputEmail = $(`#txtEmail`).val();
    let inputPass = $(`#txtPass`).val();
    let inputFName = $(`#txtFName`).val();
    let inputLName = $(`#txtLName`).val();
    let inputAge = $(`#txtAge`).val();
    let input101 = $(`#txt101`).val();
    let input102 = $(`#txt102`).val();
    let input103 = $(`#txt103`).val();
    // 3. create a new user
    let user = new User(inputEmail,inputPass,inputFName,inputLName,inputAge,input101,input102,input103);
    // 4. display it on the console
    console.log(user);
}

function init(){
//jQ find the button by id and when clicked call the function
    $(`#registerBtn`).click(register());
    console.log("registering...")
}
    // 2. trigger the btnRegister and execute the register 

window.onload=init;
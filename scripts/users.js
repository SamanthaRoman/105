function displayUsers(userArray){

// read your array
let tr="";
let colorCode="black";
    for(var i=0; i<userArray.length; i++){
        let gpa = 0;// start it for every user.
        let user=userArray[i];
        gpa=(Number(user.g1)+Number(user.g2)+Number(user.g3))/3;
// create your tabel. 

        tr=`
        <tr>
            <td>${user.email}</td>
            <td>${user.fName}</td>
            <td>${user.lName}</td>
            <td>${user.age}</td>
            <td>${user.g1}</td>
            <td>${user.g2}</td>
            <td>${user.g3}</td>
            <td style="color:${SAP(gpa)};">${gpa.toFixed(2)}</td>
        </tr>
        `;
    $("#usersTable").append(tr);
    }

}

function SAP(gpa){
    let colorCode=""
    if(gpa>95){
        colorCode="green"
    };
    if(gpa<80){
        colorCode="red"
    };
    return colorCode;
}

function init(){
    console.log("listening...");
    let users = readUsers(); // getting from LS
    displayUsers(users); // 
    console.log(users)
}

window.onload=init;
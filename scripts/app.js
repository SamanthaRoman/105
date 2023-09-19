// event listensers: button click event

// vanilla solution -- this is pure javascript
document.getElementById("btn").addEventListener("click", function(){
    // so when they click the button we want to change the elements text content
    document.getElementById("content").textContent = "Hello, from vanilla JS!"
});

// jQuery solution 
$("#btn").click(function(){
    $("#content").text("Hello, from jQuery!")
});

// benefits of jQuery - 
// 1. less code
// 2. less room for errors.

// click the button and hide the content

// my idea
// document.getElementById("btn").addEventListener("click", function(){
//     document.getElementById("content").textContent = "";
// })

// the better way doing vanilaa
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("content").style.display = "none";
});

// jQuery Solution
$("#btn").click(function(){
    $("#content").hide();
});

// change the color of the background from the div element
// vanilla JS
document.getElementById("colorBtn").addEventListener("click", function(){
    const contentDiv = document.getElementById("content");
    const currentColor = getComputedStyle(contentDiv).background;
    // this line is saying i want to inspect this element and this color to see what it is 
    if(currentColor === "rgb(250,0,0)"){
        contentDiv.style.background = "blue";
    } else {
        contentDiv.style.background = "red";
    }
});

// jQuery solution
$("#colorBtn").click(function(){
    // define the logic here
    // first need to know what the current color is
    const currentColor = $("content").css("background-color"); // from css retrieve the background color
    if(currentColor === "rgb(250,0,0)"){
        // we want to modify what? content so we refer to that
        // then what about it? css
        // 
        $("content").css("background-color", "blue");
    } else {
        $("content").css("background-color", "red");
    }
    console.log("jq running")
    
})
// alert
// alert("click ok to continue");

// prompt
let nam = prompt("what is your Age " , " ");
if(nam>=18){
    console.log("enter in the page")
}
else{
    console.log("Dont enter in page");
}


// let post = confirm("Do you want to delete the post");
// if(post){
//     console.log("Post have been deleted successfully");
// }
// else{
//     console.log("Your post have not been deleted");
// }



console.log("this is contact us");

function greet(name, greettext1 = "welcome to javascript") {
    console.log(greettext1 + " " + name);
    console.log(name + "  is a good boy");
}

let name = "harry";
let name1 = "Som";
let name2 = "Rohit";
let name3 = "Deb";
let greettext = "Good Morning";
// greet (name);  
greet(name1, greettext);
greet(name2, greettext);
greet(name3);


// Return Value Function
function sum(a, b, c) {
    let d = a + b + c;
    return d;
}

let val = sum(1, 3, 4);
console.log(val);

// MAX MIN 
function max(a, b) {
    let d = a>b;
    return d;
}
let val1 = max(1, 3);
console.log(val1);
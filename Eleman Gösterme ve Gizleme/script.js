let button1 = document.getElementsByClassName("button-show")[0];
let button2 = document.getElementsByClassName("button-hide")[0];
let button3 = document.getElementsByClassName("button-transition")[0];

let div1 = document.getElementsByClassName("div1")[0];
let div2 = document.getElementsByClassName("div2")[0]; 


button1.addEventListener("click", goster);
function goster() {
    div1.style.display="block";
}

button2.addEventListener("click", gizle);
function gizle() {
    div1.style.display="none";
}


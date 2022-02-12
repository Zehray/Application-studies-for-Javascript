let button1 = document.getElementsByClassName("button-show")[0];
let button2 = document.getElementsByClassName("button-hide")[0];
let button3 = document.getElementsByClassName("button-transition")[0];

let div1 = document.getElementsByClassName("div1")[0];
let div2 = document.getElementsByClassName("div2")[0]; 


button1.addEventListener("click", show);
function show() {
    // div1.style.display="block";
    div1.classList.add("show");
    div1.classList.remove("hidden");
    div2.classList.add("show");
    div2.classList.remove("hidden");
}

button2.addEventListener("click", hidden);
function hidden() {
   // div1.style.display="none";
   div1.classList.add("hidden");
   div1.classList.remove("show");
   div2.classList.add("hidden");
   div2.classList.remove("show");
}

button3.addEventListener("click", transition);
function transition() {
    div1.classList.toggle("transition");
    div2.classList.toggle("transition");
}


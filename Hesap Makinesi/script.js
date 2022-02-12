let button = document.getElementsByTagName("button"); 
console.log(button); // 16 button

let screen = document.getElementsByClassName("ekran1")[0];
let calculate = document.getElementById("hesapla");
let delete = document.getElementById("temizle");

for(var i=0; i<16; i++){
    if(i!=12 && i!=14){
    button[i].addEventListener("click", print)}
}

function print() {
    screen.value = screen.value + this.value;
}


calculate.addEventListener("click", hesapla);
function hesapla(){
    screen.value = eval(screen.value) ;
}

delete.addEventListener("click", sil);
function sil() {
    screen.value="";
}
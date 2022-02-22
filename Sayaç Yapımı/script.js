/*Seçim İşlemleri */
const deger = document.getElementById("degeri_al");
const programla = document.getElementById("programla");
const baslat = document.getElementById("baslat");
const durdur = document.getElementById("durdur");
const kutu = document.getElementsByClassName("kutu")[0];
const durum = document.getElementsByClassName("durum")[0];
const saniye = document.getElementsByClassName("deger")[0];

/*
console.log(deger);
console.log(programla);
console.log(baslat);
console.log(durdur);
console.log(kutu);
console.log(durum);
console.log(saniye); */

/*Seçim İşlemleri */

/** setInterval 
var x = 5;
setInterval(geriSay, 1000);

function geriSay(){
    if (x>0){
        console.log(x);
        x--;   
    } else {
        clearInterval();
    }
}
*/


programla.addEventListener("click", ()=> {
    saniye.innerHTML = deger.value;
});

baslat.addEventListener("click", ()=> {
    setInterval(geriSay, 1000);
    function geriSay(){
        var snDegeri = Number(saniye.textContent);
        if(snDegeri > 0){
            snDegeri=snDegeri-1;
            saniye.innerHTML = snDegeri.toString();
        } else{
            clearInterval();
        }
    }
});

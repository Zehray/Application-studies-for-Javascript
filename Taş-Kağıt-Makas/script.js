 /* Seçim İşlemleri */

 const oyuncu_skor = document.getElementsByClassName("oyuncu_skor")[0];
 const bilgisayar_skor = document.getElementsByClassName("bilgisayar_skor")[0];

 const tas = document.getElementById("tas");
 const kagit = document.getElementById("kagit"); 
 const makas = document.getElementById("makas");

 const oyuncu_secimi = document.getElementById("oyuncu_secimi");
 const bilgisayar_secimi = document.getElementById("bilgisayar_secimi");

 const mesaj = document.getElementsByClassName("mesaj")[0];
/*Seçim İşlemleri */

 /* */

 let oyuncu = 0;
 let bilgisayar = 0;

 function bilgisayarSecim(){
     const secim = ["tas", "kagit", "makas"];
     const rastgeleSayi = Math.floor(Math.random()*3);
     //console.log(rastgeleSayi);
     bilgisayar_secimi.setAttribute("src", `images/${secim[rastgeleSayi]}.png`);
     return secim[rastgeleSayi];
    }
 //bilgisayarSecim();

 function eventListeners(){
     tas.addEventListener("click", function(){
         bilgisayarSecim();
     });
 }
 eventListeners();
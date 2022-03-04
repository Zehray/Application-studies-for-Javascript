const dizi=["Anakart","Ram","Ekran Kartı"];
var degisim=document.getElementById("degisim");
var elemanEkle=document.getElementsByClassName("push")[0];
var elemanKaldir=document.getElementsByClassName("pop")[0];
var basaelemanEkle=document.getElementsByClassName("unshift")[0];
var bastanelemanKaldir=document.getElementsByClassName("shift")[0];
var deger=document.getElementById("deger");
var deger1=document.getElementById("deger1");

dizi.forEach((element,index)=>{
    degisim.innerHTML+=`<div class="alert alert-danger">${index}.Eleman : ${element}</div>`
})
elemanEkle.addEventListener("click",()=>{

    dizi.push(deger.value);
    degisim.innerHTML="";
    dizi.forEach((element,index)=>{
        degisim.innerHTML+=`<div class="alert alert-danger">${index}.Eleman : ${element}</div>`
    })
   // degisim.innerHTML=`<div class="alert alert-danger">${index}.Eleman : ${deger}</div>`
    console.log(dizi);
});
elemanKaldir.addEventListener("click",()=>{

    dizi.pop();
    degisim.innerHTML="";
    dizi.forEach((element,index)=>{
        degisim.innerHTML+=`<div class="alert alert-danger">${index}.Eleman : ${element}</div>`
    })
   // degisim.innerHTML=`<div class="alert alert-danger">${index}.Eleman : ${deger}</div>`
    console.log(dizi);
});
basaelemanEkle.addEventListener("click",()=>{

    dizi.shift();
    degisim.innerHTML="";
    dizi.forEach((element,index)=>{
        degisim.innerHTML+=`<div class="alert alert-danger">${index}.Eleman : ${element}</div>`
    })
   // degisim.innerHTML=`<div class="alert alert-danger">${index}.Eleman : ${deger}</div>`
    console.log(dizi);
});
bastanelemanKaldir.addEventListener("click",()=>{

    dizi.unshift(deger1.value);
    degisim.innerHTML="";
    dizi.forEach((element,index)=>{
        degisim.innerHTML+=`<div class="alert alert-danger">${index}.Eleman : ${element}</div>`
    })
   // degisim.innerHTML=`<div class="alert alert-danger">${index}.Eleman : ${deger}</div>`
    console.log(dizi);
});


/* Uygulama 2 Kodları */
var sirala = document.getElementsByClassName("sirala")[0];
var degisim=document.getElementById("degisim");
const veriler = ["Mehmet", "Zehra", "Nurda", "Yıldız", "Hıdır"];
veriler.forEach((element)=>{
    degisim.innerHTML += `<div class="alert alert-danger">${element}</div>`
});

sirala.addEventListener("click", ()=>{
    degisim.innerHTML="";
    veriler.sort().reverse().forEach((element)=>{
        degisim.innerHTML += `<div class="alert alert-danger">${element}</div>`
    });
});
const parcalar = ["Anakart", "Ram", "Ekran Kartı"];
//console.log(parcalar);

var degisim =document.getElementById("degisim");
var ekle = document.getElementById("ekle");
var ekle1 = document.getElementById("ekle1");
var ekle_btn = document.getElementById("ekle_btn");
var ekle_btn1 = document.getElementById("ekle_btn1");
var kaldir = document.getElementById("kaldir");
var kaldir1 = document.getElementById("kaldir1");

parcalar.forEach((eleman,index)=>{
//console.log(eleman);
//console.log(index);
//console.log(eleman  + " " index); her ikisini yazdırabiliyoruz.
degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`
});

ekle_btn.addEventListener("click", function(){
    //parcalar.push("Zehra");
    //console.log(parcalar);
    parcalar.push(ekle.value);
    //console.log(parcalar);
    degisim.innerHTML="";
    parcalar.forEach((eleman,index)=>{
        degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`
        });
    
});

kaldir.addEventListener("click", ()=> {
    parcalar.pop();
    //console.log(parcalar);
    degisim.innerHTML="";
    parcalar.forEach((eleman,index)=>{
        degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`
        });
});

ekle_btn1.addEventListener("click", function(){
    //parcalar.push("Zehra");
    //console.log(parcalar);
    parcalar.unshift(ekle.value);
    //console.log(parcalar);
    degisim.innerHTML="";
    parcalar.forEach((eleman,index)=>{
        degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`
        });
    
});

kaldir1.addEventListener("click", ()=> {
    parcalar.shift();
    //console.log(parcalar);
    degisim.innerHTML="";
    parcalar.forEach((eleman,index)=>{
        degisim.innerHTML+= `<div class="alert alert-danger" role="alert">${index}.index: ${eleman}</div>`
        });
});


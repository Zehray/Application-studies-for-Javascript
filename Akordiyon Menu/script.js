var button = document.getElementsByClassName("open-box");
//console.log(button);
var arrows=document.getElementsByClassName("fa-arrow-circle-down");


for(var i=0; i<button.length; i++){
    button[i].onclick=function(){
        var panel = this.nextElementSibling;
        this.lastElementChild.classList.toggle("fa-arrow-circle-up");
        console.log(panel);
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        } else {
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    }
}
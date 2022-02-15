/* completed tasks */

var listItems = document.getElementsByTagName("li");
console.log(listItems);

for (var i=0; i<listItems.length; i++){
    //console.log(listItems[i]);
    listItems[i].addEventListener("click", function(){
        this.classList.toggle("tamamlanmis");

    });
};

/*  */
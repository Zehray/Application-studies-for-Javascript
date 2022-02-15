/* completed tasks */

var listItems = document.getElementsByTagName("li");
console.log(listItems);

for (var i=0; i<listItems.length; i++){
    //console.log(listItems[i]);
    listItems[i].addEventListener("click", function(){
        this.classList.toggle("tamamlanmis");

    });
};


/* deleted tasks */
var deleteButtons = document.getElementsByTagName("span");
console.log(deleteButtons);

for (var j=0; j<deleteButtons.length; j++){
    deleteButtons[j].addEventListener("click", function(){
        var deleteing = this.parentElement;
        deleteing.remove();
    });
};
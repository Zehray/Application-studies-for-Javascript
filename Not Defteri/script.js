/* completed tasks */

function completed(){
    var listItems = document.getElementsByTagName("li");
console.log(listItems);

for (var i=0; i<listItems.length; i++){
    //console.log(listItems[i]);
    listItems[i].addEventListener("click", function(){
        this.classList.toggle("tamamlanmis");

    });
};
}
completed();

/* deleted tasks */
function deleted(){
    var deleteButtons = document.getElementsByTagName("span");
console.log(deleteButtons);

for (var j=0; j<deleteButtons.length; j++){
    deleteButtons[j].addEventListener("click", function(){
        var deleteing = this.parentElement;
        deleteing.remove();
    });
};
}
deleted();
/* Missions */

var mission = document.getElementsByTagName("input")[0];
//console.log(mission);
mission.addEventListener("keypress", function(e){
    //console.log(e.keyCode);
    if(e.keyCode===13){
        //alert("Enter'a basıldı")
        var newNote = document.createElement("li");
        newNote.innerHTML = mission.value;
        var newSpan = document.createElement("span");
        var newIcon =document.createElement("i");
        newIcon.setAttribute("class", "fa fa-window-close");

        newSpan.insertBefore(newIcon, newSpan.firstChild);
        newNote.insertBefore(newSpan, newNote.firstChild);

        var missions = document.getElementsByTagName("ul")[0];

        missions.insertBefore(newNote, missions.lastChild);
    }
    deleted();
    completed();
   

})
mission.value="";
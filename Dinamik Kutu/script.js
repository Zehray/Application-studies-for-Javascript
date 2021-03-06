
/* Selection Operations of Elements */
var boxWidth = document.getElementById("box-width");
var boxHeight = document.getElementById("box-height");
var backgroundColor = document.getElementById("background_color");
var borderWidth = document.getElementById("border-width");
var borderType = document.getElementById("border-type");
var borderColor = document.getElementById("border-color");
var boxMargin = document.getElementById("box-margin");
var boxPadding = document.getElementById("box-padding");
var rotate = document.getElementById("rotate");

var boxCreate = document.getElementById("create");

var rightSide = document.getElementsByClassName("right")[0];

/* Event to determine the function to run when clicked */

boxCreate.addEventListener("click", createDiv);
function createDiv(){
   /* rightSide.style.width = boxWidth.value + "px";
    rightSide.style.height = boxHeight.value + "px";
    rightSide.style.backgroundColor = backgroundColor.value;
    rightSide.style.borderWidth = borderWidth.value;
    rightSide.style.borderStyle = borderType.value;
    rightSide.style.borderColor = borderColor.value;
    rightSide.style.margin = boxMargin.value + "px";
    rightSide.style.padding = boxPadding.value+ "px";

    rightSide.style.transform = "rotate("+rotate.value+"deg)"; */

    /* Template Literals */

   // `boxCreate${boxCreate}`

   rightSide.style.cssText = `
   width:${boxWidth.value}px;
   height:${boxHeight.value}px;
   background-color:${backgroundColor.value};
   border-width: ${borderWidth.value};
   border-style: ${borderType.value};
   border-color: ${borderColor.value};
   margin: ${boxMargin.value}px;
   padding: ${boxPadding.value}px;
   transform: rotate(${rotate.value}deg);
   `;
}
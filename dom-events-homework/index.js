// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
var addBorderBtn = document.querySelector("#add-border-btn");
addBorderBtn.addEventListener("click", function () { return (addBorderBtn.style.border = "2px solid red"); });
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
var changeTextBtn = document.querySelector("#change-text-btn");
var content = document.getElementsByClassName("content")[0];
function textBtncolor() {
    content.style.color = "#0099FF";
    content.style.backgroundColor = "#808080";
}
changeTextBtn.addEventListener("click", function () { return textBtncolor(); });
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  box-shadow:12px 12px 2px 1px rgba(0, 0, 255, 0.2);
function contentBoxShadow() {
    content.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
}
content.addEventListener("mouseover", function () { return contentBoxShadow(); });

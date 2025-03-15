// 1.Change the text of the h1 tag.
var hOne = document.getElementsByTagName("h1")[0];
hOne.textContent = "Updated Text";
// 2.Change the color of the paragraph inside div.content.
var divP = document.querySelector(".content p");
divP.style.color = "#0099FF";
// 3.Change the list items textContent for example to be list of fruits.
var list1 = document.querySelectorAll("#list li");
list1[0].textContent = "Apple";
list1[1].textContent = "Banana";
list1[2].textContent = "Pear";
// 4.Add a button and apply border style "1px solid red" to it. -->
var newBtn = document.createElement("button");
newBtn.textContent = "Button";
newBtn.style.border = "1px solid red";
document.body.append(newBtn);

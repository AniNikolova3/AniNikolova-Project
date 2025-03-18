// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"

const addBorderBtn = document.querySelector(
  "#add-border-btn"
) as HTMLButtonElement;

addBorderBtn.addEventListener(
  "click",
  () => (addBorderBtn.style.border = "2px solid red")
);

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"

// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"

const changeTextBtn = document.querySelector(
  "#change-text-btn"
) as HTMLButtonElement;

const content = <HTMLElement>document.getElementsByClassName("content")[0];

function textBtncolor() {
  content.style.color = "#0099FF";
  content.style.backgroundColor = "#808080";
}

changeTextBtn.addEventListener("click", () => textBtncolor());

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  box-shadow:12px 12px 2px 1px rgba(0, 0, 255, 0.2);

function contentBoxShadow() {
  content.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
}

content.addEventListener("mouseover", () => contentBoxShadow());

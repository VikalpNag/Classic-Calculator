let buttons = document.querySelectorAll(".opBtn");
let evaluate = document.querySelector(".equal");
let inputVal = document.querySelector(".input");
let Clear = document.querySelector(".Ac");
let del = document.querySelector(".Del");

//input screen function.

let string = "";
let arr = Array.from(buttons);
//forEach loop does'nt work on buttons that's why we created array of buttons.

arr.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML == "=") {
      string = eval(string);
      inputVal.innerHTML = string;
    } else if (button.innerHTML == "AC") {
      string = "";
      inputVal.innerHTML = string;
    } else if (button.innerHTML == "DEL") {
      string = string.slice(0, -1);
      inputVal.innerHTML = string;
    } else {
      string += button.innerHTML;
      inputVal.innerHTML = string;
    }
  });
});

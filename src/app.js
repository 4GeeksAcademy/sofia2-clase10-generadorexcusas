/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const whoList = ["The dog", "My grandma", "The mailman", "My bird"];
  const actionList = ["ate", "peed", "crushed", "broke"];
  const whatList = ["my homework", "my phone", "the car"];
  const whenList = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let primero = Math.floor(Math.random() * whoList.length);
  let segundo = Math.floor(Math.random() * actionList.length);
  let tercero = Math.floor(Math.random() * whatList.length);
  let cuarto = Math.floor(Math.random() * whenList.length);

  let excuse =
    whoList[primero] +
    " " +
    actionList[segundo] +
    " " +
    whatList[tercero] +
    " " +
    whenList[cuarto];

  document.getElementById("excuse").innerHTML = excuse;
};

let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {
  location.reload();
});

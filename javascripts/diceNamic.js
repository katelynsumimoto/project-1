// jshint esversion: 7

let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let controller = function() {

};
window.addEventListener("load", function() {
  let button = document.querySelector("button");
  button.addEventListener("click", controller);
});
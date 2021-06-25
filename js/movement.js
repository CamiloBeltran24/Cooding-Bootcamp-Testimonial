let prev = document.getElementById("arrow-prev");
let next = document.getElementById("arrow-next");
let box = document.getElementById("box");

prev.addEventListener("click", movement);
next.addEventListener("click", movement);

function movement() {
  if (box.classList.contains("next")) {
    box.classList.remove("next");
  } else {
    box.classList.add("next");
  }
}

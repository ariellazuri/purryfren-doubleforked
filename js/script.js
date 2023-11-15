var button = document.querySelector(".show-cat");
//console.log(button)
var cat = document.querySelector(".cat");
//console.log(cat)

button.addEventListener("click", function () {
  //button.innerText = "it's working"
  if (cat.classList.contains("show")) {
    //console.log("yes");
    cat.classList.remove("show");
    button.innerText = "wait, come back";
    button.classList.add("disappear");
  } else {
    //console.log("no");
    cat.classList.add("show");
    button.innerText = "shoo, cat!";
    button.classList.remove("disappear");
  }
});

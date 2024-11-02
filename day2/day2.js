document.querySelector(".menu-hambuger").addEventListener("click", function () {
  this.classList.toggle("active");
  this.querySelectorAll("div").forEach((div) =>
    div.classList.remove("no-animation")
  );
});
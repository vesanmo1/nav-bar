window.addEventListener("load", function () {
  const nav = document.querySelector("#nav__items");
  const open = document.getElementById("menu-button");
  var opened = false;

  open.addEventListener("click", () => {
    if (!opened) {
      nav.classList.add("visible");
      opened = true;
    } else {
      nav.classList.remove("visible");
      opened = false;
    }
  });
});

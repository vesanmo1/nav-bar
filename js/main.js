window.addEventListener("load", function () {
  const nav = document.querySelector("#nav__items");
  const openMenu = document.getElementById("menu-button");
  const openSublist = document.getElementById("sublist-button");
  var openedMenu = false;
  var openedSublist = false;

  openMenu.addEventListener("click", () => {
    if (!openedMenu) {
      nav.classList.add("visible");
      openedMenu = true;
    } else {
      nav.classList.remove("visible");
      openedMenu = false;
    }
  });

  openSublist.addEventListener("click", () => {
    if (!openedSublist) {
      nav.classList.add("visible");
      openedSublist = true;
    } else {
      nav.classList.remove("visible");
      openedSublist = false;
    }
  });
});

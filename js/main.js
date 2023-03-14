window.addEventListener("load", function () {
  const nav = document.querySelector("#nav__items");
  const openMenu = document.getElementById("menu-button");
  const openSublist1 = document.getElementById("sublist-button1");
  const openSublist2 = document.getElementById("sublist-button2");
  const openSublist3 = document.getElementById("sublist-button3");
  const openSublist4 = document.getElementById("sublist-button4");
  var openedMenu = false;
  var openedSublist1 = false;
  var openedSublist2 = false;
  var openedSublist3 = false;
  var openedSublist4 = false;

  openMenu.addEventListener("click", () => {
    if (!openedMenu) {
      nav.classList.add("visible");
      openedMenu = true;
    } else {
      nav.classList.remove("visible");
      openedMenu = false;
    }
  });

  openSublist1.addEventListener("click", () => {
    if (!openedSublist1) {
      nav.classList.add("appears1");
      openedSublist1 = true;
    } else {
      nav.classList.remove("appears1");
      openedSublist1 = false;
    }
  });

  openSublist2.addEventListener("click", () => {
    if (!openedSublist2) {
      nav.classList.add("appears2");
      openedSublist2 = true;
    } else {
      nav.classList.remove("appears2");
      openedSublist2 = false;
    }
  });

  openSublist3.addEventListener("click", () => {
    if (!openedSublist3) {
      nav.classList.add("appears3");
      openedSublist3 = true;
    } else {
      nav.classList.remove("appears3");
      openedSublist3 = false;
    }
  });

  openSublist4.addEventListener("click", () => {
    if (!openedSublist4) {
      nav.classList.add("appears4");
      openedSublist4 = true;
    } else {
      nav.classList.remove("appears4");
      openedSublist4 = false;
    }
  });
});

let _clicMenu = document.querySelector(".clic_menu");
let _logoMenu = document.querySelector(".logo-menu");
let _close = document.querySelector(".logo-close");
let _asideMenu = document.querySelector(".container__menu");
let _rotate = "rotate-[-180deg]";

function showItems(item1, item2, item3) {
  document.querySelector(`.${item1}-items`).classList.toggle("hidden");
  document.querySelector(`.${item2}-items`).classList.add("hidden");
  document.querySelector(`.${item3}-items`).classList.add("hidden");

  document.querySelector(`.arrow_${item1}1`).classList.toggle(_rotate);
  document.querySelector(`.arrow_${item2}1`).classList.remove(_rotate);
  document.querySelector(`.arrow_${item3}1`).classList.remove(_rotate);

  document.querySelector(`.arrow_${item1}`).classList.toggle(_rotate);
  document.querySelector(`.arrow_${item2}`).classList.remove(_rotate);
  document.querySelector(`.arrow_${item3}`).classList.remove(_rotate);
}

document.querySelectorAll(".product, .company, .connect").forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.closest(".product")) {
      showItems("product", "company", "connect");
    } else if (e.target.closest(".company")) {
      showItems("company", "product", "connect");
    } else if (e.target.closest(".connect")) {
      showItems("connect", "company", "product");
    }
  });
});

function closeMenu() {
  _asideMenu.classList.add("hidden");
  _close.classList.replace("block", "hidden");
  _logoMenu.classList.replace("hidden", "block");
}

_logoMenu.addEventListener("click", () => {
  _asideMenu.classList.toggle("hidden");
  _close.classList.replace("hidden", "block");
  _logoMenu.classList.replace("block", "hidden");
});
_close.addEventListener("click", () => {
  closeMenu();
});

let items = ["product", "company", "connect"];
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("logo-menu")) {
    closeMenu();
    let items = ["product", "company", "connect"];

    let _item1 = document.querySelector(`.product-items`);
    let _item2 = document.querySelector(`.company-items`);
    let _item3 = document.querySelector(`.connect-items`);
    let _arrow1 = document.querySelector(`.arrow_product1`);
    let _arrow2 = document.querySelector(`.arrow_company1`);
    let _arrow3 = document.querySelector(`.arrow_connect1`);
    let arrow1 = document.querySelector(`.arrow_product`);
    let arrow2 = document.querySelector(`.arrow_company`);
    let arrow3 = document.querySelector(`.arrow_connect`);

    if (!_item1.classList.contains("hidden")) {
      _item1.classList.add("hidden");
      _arrow1.classList.remove(_rotate);
      arrow1.classList.remove(_rotate);
    } else if (!_item2.classList.contains("hidden")) {
      _item2.classList.add("hidden");
      _arrow2.classList.remove(_rotate);
      arrow2.classList.remove(_rotate);
    } else if (!_item3.classList.contains("hidden")) {
      _item3.classList.add("hidden");
      _arrow3.classList.remove(_rotate);
      arrow3.classList.remove(_rotate);
    }
  }
});

// Evita que el menú se cierre al hacer clic dentro del menú mismo
_asideMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

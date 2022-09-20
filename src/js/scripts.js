window.addEventListener("load", () => {
  // =========== On full load remove load-screen
  const loaderScreen = document.querySelector(".loader-screen");
  loaderScreen.style.display = "none";

  // =========== All the nodes that should be animated...
  let animatedNodes = [
    "smoke",
    "space",
    "line__line",
    "line__circle_bottom",
    "banner-mars__heading",
    "banner-mars__video",
  ];
  // ...animate them
  animatedNodes.forEach((node) => {
    document.querySelector(`.${node}`).style.animationPlayState = "running";
  });

  // =========== Moving Space Background On Mousemove
  const spaceBg = document.querySelector(".space");

  setTimeout(() => {
    document.body.onmousemove = (e) => {
      const width = document.body.offsetWidth;
      spaceBg.style.transform = "translateX(0)";

      if (e.clientX < width / 3) {
        spaceBg.style.transform = "translateX(-5%)";
      }
      if (e.clientX > (width / 3) * 2) {
        spaceBg.style.transform = "translateX(5%)";
      }
    };
  }, 2500); // wait to end of animation
});

// =========== Show/Hide Booking Form
const headerButton = document.querySelector(".header__btn");
const bookFormBlock = document.querySelector(".book-form__wrap");
const bookFormClose = document.querySelector(".book-form__close");

headerButton.onclick = (e) => {
  e.preventDefault();
  bookFormBlock.classList.toggle("book-form__wrap_hidden");
};

bookFormClose.onclick = (e) => {
  e.preventDefault();
  bookFormBlock.classList.toggle("book-form__wrap_hidden");
};

// =========== Header Burger
const headerBurger = document.querySelector(".header__burger");
const headerList = document.querySelector(".header__list");

headerBurger.onclick = () => {
  headerBurger.classList.toggle("header__burger_active");
  headerList.classList.toggle("header__list_showed");
};

// =========== Validate Input Tickets Amount
const inputAmount = document.querySelector("#tickets-amount");

inputAmount.onfocus = () => {
  let value = inputAmount.value;
  inputAmount.value = "";
  inputAmount.onchange = () => {
    let newValue = inputAmount.value;
    if (!isNaN(newValue)) {
      if (
        newValue.toString().slice(-1) == 2 ||
        newValue.toString().slice(-1) == 3 ||
        newValue.toString().slice(-1) == 4
      ) {
        inputAmount.value = `${newValue} человека`;
      } else {
        inputAmount.value = `${newValue} человек`;
      }
    } else {
      inputAmount.value = value;
    }
  };
};

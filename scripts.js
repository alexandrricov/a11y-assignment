window.addEventListener("DOMContentLoaded", () => {
  const inputsColor = document.querySelectorAll("input[name=product_color]");
  const formColorLabel = document.getElementById("productColorValue");
  const formPriceLabel = document.getElementById("productPriceValue");
  inputsColor.forEach((input) => {
    input.addEventListener("change", (e) => {
      formColorLabel.innerText = e.target.dataset.nameDisplay;
      formPriceLabel.innerText = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: "EUR",
        currencyDisplay: "code",
        minimumFractionDigits: 0,
      }).format(e.target.dataset.priceDisplay);
    });
  });

  const inputsQuantity = document.querySelectorAll(".input-quantity");
  const quantityText = document.querySelector("#selected-quantity");
  const quantityInput = document.querySelector(".input-quantity__field");
  inputsQuantity.forEach((input) => {
    const inputField = input.querySelector(".input-quantity__field");
    const inputBtnIncrease = input.querySelector(
      ".input-quantity__btn[data-action=increase]"
    );
    const inputBtnDecrease = input.querySelector(
      ".input-quantity__btn[data-action=decrease]"
    );

    inputBtnIncrease.addEventListener("click", () => {
      const initialValue = inputField.value * 1;
      inputField.value = initialValue + 1;
      quantityText.innerText = inputField.value;
    });
    inputBtnDecrease.addEventListener("click", () => {
      const initialValue = inputField.value * 1;
      if (initialValue > 1) {
        inputField.value = initialValue - 1;
        quantityText.innerText = inputField.value;
      }
    });
    quantityInput.addEventListener("change", () => {
      quantityText.innerText = "";
    });
  });

  const openDialogBtn = document.getElementById("openDialogBtn");
  const dialog = document.getElementById("dialog");
  const mainGrid = document.getElementById("main-grid");

  openDialogBtn.addEventListener("click", () => {
    dialog.showModal();

    mainGrid.setAttribute("inert", "");
    mainGrid.setAttribute("aria-hidden", "true");
  });

  dialog.addEventListener("close", () => {
    mainGrid.removeAttribute("inert");
    mainGrid.removeAttribute("aria-hidden");

    openDialogBtn.focus();
  });
});

// "Buy Pro" buttons ([data-buy]): Freemius's checkout, which returns to the license page with
// the order (Plans › Customization in Freemius).
(function () {
  const { productID, planID } = window.VMBOSS_CONFIG.freemius;
  document.querySelectorAll("[data-buy]").forEach((button) => {
    if (productID && planID) {
      button.href = `https://checkout.freemius.com/product/${productID}/plan/${planID}/`;
    } else {
      button.textContent = "Buying opens soon";
      button.setAttribute("aria-disabled", "true");
    }
  });
})();

// "Buy Pro" buttons ([data-buy]): Paddle's checkout, then the license page with the order.
(function () {
  const config = window.VMBOSS_CONFIG;
  const buttons = document.querySelectorAll("[data-buy]");
  const ready = Boolean(config.paddle.clientToken && config.paddle.priceID && window.Paddle);
  if (!ready) {
    buttons.forEach((button) => {
      button.textContent = "Buying opens soon";
      button.setAttribute("aria-disabled", "true");
    });
    return;
  }
  if (config.paddle.environment === "sandbox") Paddle.Environment.set("sandbox");
  Paddle.Initialize({
    token: config.paddle.clientToken,
    eventCallback(event) {
      if (event.name === "checkout.completed" && event.data && event.data.transaction_id) {
        location.href = "license.html?transaction=" + encodeURIComponent(event.data.transaction_id);
      }
    },
  });
  buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
      event.preventDefault();
      Paddle.Checkout.open({ items: [{ priceId: config.paddle.priceID, quantity: 1 }] });
    }),
  );
})();

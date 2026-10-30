// The license page: Freemius's checkout sends buyers here with their order
// in the address, and the license server answers it with their key. A payment can take a few
// seconds to appear at Freemius, so "not found" is tried again.
(function () {
  const config = window.VMBOSS_CONFIG;
  const order = location.search;
  const status = document.getElementById("status");
  const result = document.getElementById("result");
  const support = `<a href="mailto:${config.supportEmail}">${config.supportEmail}</a>`;

  function fail(message) {
    status.innerHTML = `<span class="error">${message}</span> If this keeps happening, email ${support} with your receipt and we'll send your key.`;
  }

  if (!new URLSearchParams(order).has("payment_id")) {
    status.innerHTML = `Open this page from the link after buying VM Boss Pro. Lost your key? Email ${support} with your receipt.`;
    return;
  }

  let attempts = 0;
  async function fetchKey() {
    attempts += 1;
    try {
      const response = await fetch(`${config.licenseServer}/license${order}`);
      const body = await response.json();
      if ((response.status === 404 || response.status === 502) && attempts < 20) {
        status.textContent = "Confirming your payment…";
        return setTimeout(fetchKey, 3000);
      }
      if (!response.ok) return fail(body.error || "Your key couldn’t be fetched.");
      status.textContent = `Thank you, ${body.name}! Here’s your license key:`;
      document.getElementById("key").textContent = body.key;
      document.getElementById("activate").href = "vmboss://activate?key=" + encodeURIComponent(body.key);
      document.getElementById("copy").addEventListener("click", async () => {
        await navigator.clipboard.writeText(body.key);
        document.getElementById("copy").textContent = "Copied";
      });
      result.hidden = false;
    } catch {
      if (attempts < 20) return setTimeout(fetchKey, 3000);
      fail("The license server isn’t answering.");
    }
  }
  fetchKey();
})();

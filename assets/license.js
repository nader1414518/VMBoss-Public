// The license page: asks the license server for the key of the order in the address
// (?transaction=txn_…), waiting while Paddle finishes taking the payment.
(function () {
  const config = window.VMBOSS_CONFIG;
  const params = new URLSearchParams(location.search);
  const transaction = params.get("transaction") || params.get("transaction_id") || params.get("_ptxn") || "";
  const status = document.getElementById("status");
  const result = document.getElementById("result");
  const support = `<a href="mailto:${config.supportEmail}">${config.supportEmail}</a>`;

  function fail(message) {
    status.innerHTML = `<span class="error">${message}</span> If this keeps happening, email ${support} with your receipt and we'll send your key.`;
  }

  if (!transaction) {
    status.innerHTML = `Open this page from the link after buying VM Boss Pro. Lost your key? Email ${support} with your receipt.`;
    return;
  }
  if (!config.licenseServer) return fail("Keys can’t be fetched here yet.");

  let attempts = 0;
  async function fetchKey() {
    attempts += 1;
    try {
      const response = await fetch(`${config.licenseServer}/license?transaction=${encodeURIComponent(transaction)}`);
      const body = await response.json();
      if (response.status === 409 && attempts < 20) {
        status.textContent = "Waiting for Paddle to confirm your payment…";
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

// Fill these in once Paddle has approved the website (see docs/RELEASING.md in the app's
// repository). Until clientToken and priceID are set, the Buy buttons say "Buying opens soon".
window.VMBOSS_CONFIG = {
  paddle: {
    environment: "sandbox", // "production" once you sell for real
    clientToken: "", // Paddle › Developer tools › Authentication › Client-side tokens (test_… or live_…)
    priceID: "", // VM Boss Pro's price (pri_…)
  },
  // The license server (Server/license-worker in the app's repository).
  licenseServer: "https://license.vm-boss.com",
  supportEmail: "support@vm-boss.com",
};

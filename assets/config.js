// Fill these in once Paddle has approved the website (see docs/RELEASING.md in the app's
// repository). Until clientToken and priceID are set, the Buy buttons say "Buying opens soon".
window.VMBOSS_CONFIG = {
  paddle: {
    environment: "sandbox", // "production" once you sell for real
    clientToken: "", // Paddle › Developer tools › Authentication › Client-side tokens (test_… or live_…)
    priceID: "", // VM Boss Pro's price (pri_…)
  },
  // The license server's address (https://vmboss-license.<account>.workers.dev).
  licenseServer: "",
  supportEmail: "nader19113118@gmail.com",
};

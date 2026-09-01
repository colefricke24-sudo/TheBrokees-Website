# Activating live payments

The storefront includes a working bag, checkout form, and Apple Pay / card / PayPal choices. It deliberately does **not** process payments yet: merchant API credentials and a server-side payment service are required to process orders securely.

## Recommended setup

Use a verified **PayPal Business** account with the current PayPal JavaScript SDK v6 and a small server-side Orders API integration. PayPal's v6 SDK supports PayPal, Apple Pay, and credit/debit cards when your account and country are eligible. It requires a PayPal client ID in the browser and a secret held only on the server.

Alternatively, use **Stripe Checkout** for Apple Pay plus credit/debit cards, and PayPal's SDK for the PayPal choice. In either case, do not put secret keys in `index.html` or `script.js`.

## What is needed from the brand owner

1. A verified PayPal Business account and its client ID + secret, or a verified Stripe account and restricted server key.
2. A deployed HTTPS domain. Apple Pay requires HTTPS and domain verification.
3. Final product price, shipping rules, tax locations, return policy, and inventory/fulfillment connection.
4. A server or serverless host (for example Vercel, Netlify Functions, or Cloudflare Workers) to create and capture orders.

## Secure payment flow

1. The site sends the cart's product IDs and quantities to your server.
2. The server looks up trusted prices, creates an order with PayPal or Stripe, and returns only the browser-safe checkout data.
3. The buyer completes the provider-hosted payment flow.
4. A webhook on the server verifies the provider's signed event before marking an order paid and sending it to fulfillment.

Never trust a price sent from the browser, and never handle raw card details in this project.

## Source references

PayPal's current SDK setup describes support for PayPal, Apple Pay, and credit/debit cards, and its Checkout flow requires server endpoints to create and capture orders: [PayPal JavaScript SDK v6](https://developer.paypal.com/sdk/js/set-up/) and [PayPal Checkout integration](https://developer.paypal.com/platforms/checkout/standard/integrate).

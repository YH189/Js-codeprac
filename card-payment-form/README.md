# card-payment-form

A vanilla JavaScript form that checks a user's subscription status via checkbox and displays a selected payment method from a radio button group.

## What it does

- Checkbox lets the user subscribe (or not)
- Radio buttons let the user pick one card type: Visa, Mastercard, or PayPal
- On submit, displays the subscription status and the selected payment method

## Tech used

- HTML
- CSS
- JavaScript (DOM manipulation, event handling, checkbox/radio state, conditional logic)

## What I learned

- The role of the `name` attribute in grouping radio buttons so only one can be selected
- Why `id` and `label for=""` must match exactly (case-sensitive)
- Chaining `if / else if / else` correctly when only one option in a group can be true at a time
- How independent `if` blocks with their own `else` can silently overwrite each other's output

## How to run

1. Clone the repo
2. Open `index.html` in your browser
3. Check the subscribe box, select a card, click Submit

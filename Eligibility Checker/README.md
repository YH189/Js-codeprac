# Age Eligibility Checker

A vanilla JavaScript app that takes a user's age as input and returns an eligibility message based on defined age ranges.

## What it does

- Takes age input from the user
- Validates and evaluates it against a set of rules
- Displays a corresponding message (eligible, too young, too old, invalid, etc.)

## Tech used

- HTML
- CSS
- JavaScript (DOM manipulation, event handling, conditional logic)

## Rules implemented

| Age Range   | Message                                      |
|-------------|-----------------------------------------------|
| Exactly 18  | You are eligible                              |
| 0 or below  | This age doesn't exist                        |
| 1–17        | You must be 18+ to apply                      |
| 19–95       | Welcome to our services                       |
| 96–200      | You are too OLD to apply & sorry, not eligible|
| Invalid/NaN | Please enter a valid number                   |

## What I learned

- Debugging `getElementById` mismatches between HTML ids and JS variables
- Why `const` can't be redeclared in the same scope
- How to avoid dead/unreachable code in chained `if-else` conditions
- Handling `NaN` from invalid or empty input

## How to run

1. Clone the repo
2. Open `index.html` in your browser
3. Enter an age and click Submit

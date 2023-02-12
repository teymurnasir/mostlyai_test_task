# MostlyAI test task

## Assuming you have installed:

- [Node](https://nodejs.org/en/download/) above 8.x.x
- [npm](https://www.npmjs.com/)

## Run locally:

1. Type `npm install` to install dependencies
2. Type `npm run cypress:open` to start cypress

## To get testing reports:

1. Type `npm run cypress:run` to execute the tests
2. View the result file navigate to cypress folder > reports folder > index.html file

## The feedback:

1. Proper architecture for generic test writing
There is no architecture created, everything is put into one file, and there is no distinction between
tests, selectors, and functions that create them; everything is hardcoded
2. Tests are not maintainable
3. Code readable - No

Overall, the solution was not well architected and we would need someone more senior for this role.

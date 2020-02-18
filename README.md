Simple Calculator
=================

This is a simple calculator implementing the DMAS part of BODMAS.
It has been primarily designed around providing a quick result as
you type a calculation in the input but it also includes a simple
set of buttons to enter calculations.

Operators
---------

You can use the following operators:

 -  `/` - Divide
 - `*` - Multiply
 - `+` - Add
 - `-` - Subtract

Example calculations
--------------------

The calculator can support calculations like:

 - `2 + 2`
 - `2 + 3 * 4`
 - `2 * 2 * 2 * 2 * 2`
 - `4 - 6 + 2 * 5 / 3`


Installation
------------

This project depends on having Node JS (https://nodejs.org/en/)
and Yarn (https://classic.yarnpkg.com/en/) installed
on the system.

Install the necessary dependencies using yarn.

```sh
yarn
```

Test
----

This performs lint, prettier and unit tests

```sh
yarn test
```

You can run the unit tests alone using

```sh
yarn test:unit
```

You can watch unit tests using

```sh
yarn test:unit --watch
```

Development Server
------------------

```sh
yarn start
```

Production Build
----------------

This build the project into the `./dist` directory

```sh
NODE_ENV=production yarn build
```

CI Pipeline
-----------

It's common to break these out using CI pipeline definition files depending on the CI/CD platform they are often in a yaml format (Groovy in the case of Jenkins) so that the different stages can have their own metrics.

```
// stage test
yarn test

// stage build
NODE_ENV=production yarn build

// stage publish
// Publish test result and coverage
// coverage results will be in the ./coverage folder
// usually I would use the jest junit reporter to send test results

// stage clean
yarn clean
```

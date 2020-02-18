Simple Calculator
=================

This project depends on having Node JS (https://nodejs.org/en/)
and Yarn (https://classic.yarnpkg.com/en/) installed
on the system.

Installation
------------

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

# Simple String Extensions for TypeScript

A set of simple extensions for the JavaScript String class.

[![Build Status](https://travis-ci.org/marcoschaule/simple-string-extensions.svg?branch=master)](https://travis-ci.org/marcoschaule/simple-string-extensions)

## Installation and usage

In terminal/console type:

```npm
npm install simple-string-extensions
```

Somewhere early in code use:

```typescript
import 'simple-string-extensions';
```

Finally in code:

```typescript
const someCapitalizedStr = someStr.capitalize();
const someCamelCaseStr   = someStr.toCamelCase();
```


## Available extensions

* `capitalize`: A method to capitalize strings.
* `toCamelCase`: A method to transform strings into camel case.
* `toConstantCase`: A method to transform strings into constant case.
* `toDashCase`: A method to transform strings into dash case.
* `toPascalCase`: A method to transform strings into pascal case.
* `toSnakeCase`: A method to transform strings into snake case.
* `toSpaceCase`: A method to transform strings into space case.


## Run tests

Tests can be run with:

```npm
npm run test
```

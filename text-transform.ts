// *****************************************************************************
// Declarations
// *****************************************************************************

// Export nothing for this file to become a module.
export {};

// Declare global string extensions for them to be defined in the next step.
declare global {
  interface String {
    capitalize()    : string;
    toCamelCase()   : string;
    toConstantCase(): string;
    toDashCase()    : string;
    toPascalCase()  : string;
    toSnakeCase()   : string;
    toSpaceCase()   : string;
  }
}

// *****************************************************************************
// Library
// *****************************************************************************

/**
 * String extension method to turn the current string
 * into a capitalized string (first letter big).
 *
 * @type {Function}
 * @this {String} the JavaScript String class
 * @returns {string} string in capitalized form
 */
String.prototype.capitalize = function() {
  const str = this.trim();

  if (!str || !str[0]) {
    return '';
  }

  return str[0].toUpperCase() + str.substr(1);
};

// *****************************************************************************

/**
 * String extension method to turn the current string
 * into camel case.
 *
 * @type {Function}
 * @this {String} the JavaScript String class
 * @returns {string} string in camel case form
 */
String.prototype.toCamelCase = function() {
  let str           = this.trim();
  const regex1: any = /[A-Z0-9ÄÖÜ_]+/;
  const regex2: any = /([\s\-_]|\b)[\wäöüÄÖÜß]/g;
  const regex3: any = /\s+/g;
  const match1: any = str.match(regex1);

  if (match1 && match1[0] && match1[0].length === str.length) {
    str = str.toLowerCase();
  }

  return (str
      .replace(regex2, ($0, $1, pos) =>
          (pos === 0 ? $0.toLowerCase() : $0.replace($1, '').toUpperCase()))
      .replace(regex3, '')
  );
};

// *****************************************************************************

/**
 * String extension method to turn the current string
 * into constant case.
 *
 * @type {Function}
 * @this {String} the JavaScript String class
 * @returns {string} string in constant case form
 */
String.prototype.toConstantCase = function() {
  return (this.toSnakeCase().toUpperCase());
};

// *****************************************************************************

/**
 * String extension method to turn the current string
 * into dash case.
 *
 * @type {Function}
 * @this {String} the JavaScript String class
 * @returns {string} string in dash case form
 */
String.prototype.toDashCase = function() {
  return this.toSnakeCase().replace(/_/g, '-');
};

// *****************************************************************************

/**
 * String extension method to turn the current string
 * into pascal case.
 *
 * @type {Function}
 * @this {String} the JavaScript String class
 * @returns {string} string in pascal case form
 */
String.prototype.toPascalCase = function() {
  return (this.toCamelCase().capitalize());
};

// *****************************************************************************

/**
 * String extension method to turn the current string
 * into snake case.
 *
 * @type {Function}
 * @this {String} the JavaScript String class
 * @returns {string} string in snake case form
 */
String.prototype.toSnakeCase = function() {
  const regex1: any = /\ /g;
  const regex2: any = /[a-zäöüß][A-Zäöü]/g;
  const regex3: any = /[\-]+/g;
  const str              = this.trim();

  return (str
    .replace(regex1, '_')
    .replace(regex2, $0 => $0[0] + '_' + $0[1])
    .replace(regex3, '_')
    .toLowerCase()
  );
};

// *****************************************************************************

/**
 * String extension method to turn the current string
 * into space case.
 *
 * @type {Function}
 * @this {String} the JavaScript String class
 * @returns {string} string in space case form
 */
String.prototype.toSpaceCase = function() {
  const regex1: any = /\_/g;
  return this.toSnakeCase().replace(regex1, ' ').toLowerCase();
};

// *****************************************************************************

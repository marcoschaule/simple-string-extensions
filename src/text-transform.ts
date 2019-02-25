// *****************************************************************************
// Declarations
// *****************************************************************************

// Export nothing for this file to become a module.
export {};

/**
 * Simple extension of the JavaScript String class.
 *
 * @author Marco Schaule <marco.schaule@net-designer.net>
 */
declare global {
  interface String {

    /**
     * String extension method to turn the current string
     * into a capitalized string (first letter big).
     *
     * @type Function
     * @this String  the JavaScript String class
     * @returns the current string in capitalized form
     */
    capitalize(): string;

    /**
     * String extension method to turn the current string
     * into camel case.
     *
     * @type Function
     * @this String  the JavaScript String class
     * @returns the current string in camel case form
     */
    toCamelCase(): string;

    /**
     * String extension method to turn the current string
     * into constant case.
     *
     * @type Function
     * @this String  the JavaScript String class
     * @returns the current string in constant case form
     */
    toConstantCase(): string;

    /**
     * String extension method to turn the current string
     * into dash case.
     *
     * @type Function
     * @this String  the JavaScript String class
     * @returns the current string in dash case form
     */
    toDashCase(): string;

    /**
     * String extension method to turn the current string
     * into pascal case.
     *
     * @type Function
     * @this String  the JavaScript String class
     * @returns the current string in pascal case form
     */
    toPascalCase(): string;

    /**
     * String extension method to turn the current string
     * into snake case.
     *
     * @type Function
     * @this String  the JavaScript String class
     * @returns the current string in snake case form
     */
    toSnakeCase(): string;

    /**
     * String extension method to turn the current string
     * into space case.
     *
     * @type Function
     * @this String  the JavaScript String class
     * @returns the current string in space case form
     */
    toSpaceCase(): string;

  }
}

// *****************************************************************************
// Library
// *****************************************************************************

String.prototype.capitalize = function() {
  const str = this.trim();

  if (!str || !str[0]) {
    return '';
  }

  return str[0].toUpperCase() + str.substr(1);
};

// *****************************************************************************

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

String.prototype.toConstantCase = function() {
  return (this.toSnakeCase().toUpperCase());
};

// *****************************************************************************

String.prototype.toDashCase = function() {
  return this.toSnakeCase().replace(/_/g, '-');
};

// *****************************************************************************

String.prototype.toPascalCase = function() {
  return (this.toCamelCase().capitalize());
};

// *****************************************************************************

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

String.prototype.toSpaceCase = function() {
  const regex1: any = /\_/g;
  return this.toSnakeCase().replace(regex1, ' ').toLowerCase();
};

// *****************************************************************************

"use strict";
/**
 * Simple extension of the JavaScript String class.
 *
 * @author Marco Schaule <marco.schaule@net-designer.net>
 */
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.capitalize = capitalize.bind(String.prototype);
String.prototype.toCamelCase = toCamelCase.bind(String.prototype);
String.prototype.toConstantCase = toConstantCase.bind(String.prototype);
String.prototype.toDashCase = toDashCase.bind(String.prototype);
String.prototype.toPascalCase = toPascalCase.bind(String.prototype);
String.prototype.toSnakeCase = toSnakeCase.bind(String.prototype);
String.prototype.toSpaceCase = toSpaceCase.bind(String.prototype);
// *****************************************************************************
// Library
// *****************************************************************************
/**
 * String extension method to turn the current string
 * into a capitalized string (first letter big).
 *
 * @type Function
 * @this String  the JavaScript String class
 * @returns the current string in capitalized form
 */
function capitalize() {
    var str = this.trim();
    if (!str || !str[0]) {
        return '';
    }
    return str[0].toUpperCase() + str.substr(1);
}
;
// *****************************************************************************
/**
 * String extension method to turn the current string
 * into camel case.
 *
 * @type Function
 * @this String  the JavaScript String class
 * @returns the current string in camel case form
 */
function toCamelCase() {
    var str = this.trim();
    var regex1 = /[A-Z0-9ÄÖÜ_]+/;
    var regex2 = /([\s\-_]|\b)[\wäöüÄÖÜß]/g;
    var regex3 = /\s+/g;
    var match1 = str.match(regex1);
    if (match1 && match1[0] && match1[0].length === str.length) {
        str = str.toLowerCase();
    }
    return (str
        .replace(regex2, function ($0, $1, pos) {
        return (pos === 0 ? $0.toLowerCase() : $0.replace($1, '').toUpperCase());
    })
        .replace(regex3, ''));
}
;
// *****************************************************************************
/**
 * String extension method to turn the current string
 * into constant case.
 *
 * @type Function
 * @this String  the JavaScript String class
 * @returns the current string in constant case form
 */
function toConstantCase() {
    return (this.toSnakeCase().toUpperCase());
}
;
// *****************************************************************************
/**
 * String extension method to turn the current string
 * into dash case.
 *
 * @type Function
 * @this String  the JavaScript String class
 * @returns the current string in dash case form
 */
function toDashCase() {
    return this.toSnakeCase().replace(/_/g, '-');
}
;
// *****************************************************************************
/**
 * String extension method to turn the current string
 * into pascal case.
 *
 * @type Function
 * @this String  the JavaScript String class
 * @returns the current string in pascal case form
 */
function toPascalCase() {
    return (this.toCamelCase().capitalize());
}
;
// *****************************************************************************
/**
 * String extension method to turn the current string
 * into snake case.
 *
 * @type Function
 * @this String  the JavaScript String class
 * @returns the current string in snake case form
 */
function toSnakeCase() {
    var regex1 = /\ /g;
    var regex2 = /[a-zäöüß][A-Zäöü]/g;
    var regex3 = /[\-]+/g;
    var str = this.trim();
    return (str
        .replace(regex1, '_')
        .replace(regex2, function ($0) { return $0[0] + '_' + $0[1]; })
        .replace(regex3, '_')
        .toLowerCase());
}
;
// *****************************************************************************
/**
 * String extension method to turn the current string
 * into space case.
 *
 * @type Function
 * @this String  the JavaScript String class
 * @returns the current string in space case form
 */
function toSpaceCase() {
    var regex1 = /\_/g;
    return this.toSnakeCase().replace(regex1, ' ').toLowerCase();
}
;
// *****************************************************************************

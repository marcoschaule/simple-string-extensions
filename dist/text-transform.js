"use strict";
// *****************************************************************************
// Declarations
// *****************************************************************************
Object.defineProperty(exports, "__esModule", { value: true });
// *****************************************************************************
// Library
// *****************************************************************************
String.prototype.capitalize = function () {
    var str = this.trim();
    if (!str || !str[0]) {
        return '';
    }
    return str[0].toUpperCase() + str.substr(1);
};
// *****************************************************************************
String.prototype.toCamelCase = function () {
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
};
// *****************************************************************************
String.prototype.toConstantCase = function () {
    return (this.toSnakeCase().toUpperCase());
};
// *****************************************************************************
String.prototype.toDashCase = function () {
    return this.toSnakeCase().replace(/_/g, '-');
};
// *****************************************************************************
String.prototype.toPascalCase = function () {
    return (this.toCamelCase().capitalize());
};
// *****************************************************************************
String.prototype.toSnakeCase = function () {
    var regex1 = /\ /g;
    var regex2 = /[a-zäöüß][A-Zäöü]/g;
    var regex3 = /[\-]+/g;
    var str = this.trim();
    return (str
        .replace(regex1, '_')
        .replace(regex2, function ($0) { return $0[0] + '_' + $0[1]; })
        .replace(regex3, '_')
        .toLowerCase());
};
// *****************************************************************************
String.prototype.toSpaceCase = function () {
    var regex1 = /\_/g;
    return this.toSnakeCase().replace(regex1, ' ').toLowerCase();
};
// *****************************************************************************

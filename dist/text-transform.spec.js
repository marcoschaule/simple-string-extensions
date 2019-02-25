"use strict";
// *****************************************************************************
// Imports
// *****************************************************************************
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
require("./text-transform");
// *****************************************************************************
// Locals
// *****************************************************************************
var expect = chai.expect;
// *****************************************************************************
// Tests
// *****************************************************************************
describe("The text transform extension of JavaScript's String class", function () {
    describe("when using the 'capitalize' method", function () {
        it("should capitalize a given string starting with a lower case letter.", function () {
            var strGiven = 'someString';
            var strResult = 'SomeString';
            expect(strGiven.capitalize()).to.be.equal(strResult);
        });
        it("should trim a string before capitalizing it.", function () {
            var strResult = 'SomeString';
            var strGiven;
            strGiven = 'someString ';
            expect(strGiven.capitalize()).to.be.equal(strResult);
            strGiven = ' someString';
            expect(strGiven.capitalize()).to.be.equal(strResult);
            strGiven = ' someString ';
            expect(strGiven.capitalize()).to.be.equal(strResult);
        });
        it("should not capitalize a given string if not starting with a letter.", function () {
            var strGiven = '_someString';
            var strResult = '_SomeString';
            expect(strGiven.capitalize()).not.to.be.equal(strResult);
            expect(strGiven.capitalize()).to.be.equal(strGiven);
        });
    });
    // ***************************************************************************
    describe("when using the 'toCamelCase' method", function () {
        it("should transform a given constant case string to camel case.", function () {
            var strGiven = 'SOME_CONSTANT_CASE';
            var strResult = 'someConstantCase';
            expect(strGiven.toCamelCase()).to.be.equal(strResult);
        });
        it("should transform a given dash case string to camel case.", function () {
            var strGiven = 'some-dash-case';
            var strResult = 'someDashCase';
            expect(strGiven.toCamelCase()).to.be.equal(strResult);
        });
        it("should transform a given pascal case string to camel case.", function () {
            var strGiven = 'SomePascalCase';
            var strResult = 'somePascalCase';
            expect(strGiven.toCamelCase()).to.be.equal(strResult);
        });
        it("should transform a given snake case string to camel case.", function () {
            var strGiven = 'some_snake_case';
            var strResult = 'someSnakeCase';
            expect(strGiven.toCamelCase()).to.be.equal(strResult);
        });
        it("should transform a given space case string to camel case.", function () {
            var strGiven = 'some space case';
            var strResult = 'someSpaceCase';
            expect(strGiven.toCamelCase()).to.be.equal(strResult);
        });
        it("should transform a given string to camel case.", function () {
            var strGiven = 'Some string with inter-mixed specialChars.';
            var strResult = 'someStringWithInterMixedSpecialChars.';
            expect(strGiven.toCamelCase()).to.be.equal(strResult);
        });
    });
    // ***************************************************************************
    describe("when using the 'toConstantCase' method", function () {
        it("should transform a given camel case string to constant case.", function () {
            var strGiven = 'someCamelCase';
            var strResult = 'SOME_CAMEL_CASE';
            expect(strGiven.toConstantCase()).to.be.equal(strResult);
        });
        it("should transform a given dash case string to constant case.", function () {
            var strGiven = 'some-dash-case';
            var strResult = 'SOME_DASH_CASE';
            expect(strGiven.toConstantCase()).to.be.equal(strResult);
        });
        it("should transform a given pascal case string to constant case.", function () {
            var strGiven = 'SomePascalCase';
            var strResult = 'SOME_PASCAL_CASE';
            expect(strGiven.toConstantCase()).to.be.equal(strResult);
        });
        it("should transform a given snake case string to constant case.", function () {
            var strGiven = 'some_snake_case';
            var strResult = 'SOME_SNAKE_CASE';
            expect(strGiven.toConstantCase()).to.be.equal(strResult);
        });
        it("should transform a given space case string to constant case.", function () {
            var strGiven = 'some space case';
            var strResult = 'SOME_SPACE_CASE';
            expect(strGiven.toConstantCase()).to.be.equal(strResult);
        });
        it("should transform a given string to constant case.", function () {
            var strGiven = 'Some string with inter-mixed specialChars.';
            var strResult = 'SOME_STRING_WITH_INTER_MIXED_SPECIAL_CHARS.';
            expect(strGiven.toConstantCase()).to.be.equal(strResult);
        });
    });
    // ***************************************************************************
    describe("when using the 'toDashCase' method", function () {
        it("should transform a given camel case string to dash case.", function () {
            var strGiven = 'someCamelCase';
            var strResult = 'some-camel-case';
            expect(strGiven.toDashCase()).to.be.equal(strResult);
        });
        it("should transform a given dash case string to dash case.", function () {
            var strGiven = 'SOME_CONSTANT_CASE';
            var strResult = 'some-constant-case';
            expect(strGiven.toDashCase()).to.be.equal(strResult);
        });
        it("should transform a given pascal case string to dash case.", function () {
            var strGiven = 'SomePascalCase';
            var strResult = 'some-pascal-case';
            expect(strGiven.toDashCase()).to.be.equal(strResult);
        });
        it("should transform a given snake case string to dash case.", function () {
            var strGiven = 'some_snake_case';
            var strResult = 'some-snake-case';
            expect(strGiven.toDashCase()).to.be.equal(strResult);
        });
        it("should transform a given space case string to dash case.", function () {
            var strGiven = 'some space case';
            var strResult = 'some-space-case';
            expect(strGiven.toDashCase()).to.be.equal(strResult);
        });
        it("should transform a given string to dash case.", function () {
            var strGiven = 'Some string with inter-mixed specialChars.';
            var strResult = 'some-string-with-inter-mixed-special-chars.';
            expect(strGiven.toDashCase()).to.be.equal(strResult);
        });
    });
    // ***************************************************************************
    describe("when using the 'toPascalCase' method", function () {
        it("should transform a given camel case string to pascal case.", function () {
            var strGiven = 'someCamelCase';
            var strResult = 'SomeCamelCase';
            expect(strGiven.toPascalCase()).to.be.equal(strResult);
        });
        it("should transform a given constant case string to pascal case.", function () {
            var strGiven = 'SOME_CONSTANT_CASE';
            var strResult = 'SomeConstantCase';
            expect(strGiven.toPascalCase()).to.be.equal(strResult);
        });
        it("should transform a given dash case string to pascal case.", function () {
            var strGiven = 'some-dash-case';
            var strResult = 'SomeDashCase';
            expect(strGiven.toPascalCase()).to.be.equal(strResult);
        });
        it("should transform a given snake case string to pascal case.", function () {
            var strGiven = 'some_snake_case';
            var strResult = 'SomeSnakeCase';
            expect(strGiven.toPascalCase()).to.be.equal(strResult);
        });
        it("should transform a given space case string to pascal case.", function () {
            var strGiven = 'some space case';
            var strResult = 'SomeSpaceCase';
            expect(strGiven.toPascalCase()).to.be.equal(strResult);
        });
        it("should transform a given string to pascal case.", function () {
            var strGiven = 'Some string with inter-mixed specialChars.';
            var strResult = 'SomeStringWithInterMixedSpecialChars.';
            expect(strGiven.toPascalCase()).to.be.equal(strResult);
        });
    });
    // ***************************************************************************
    describe("when using the 'toSnakeCase' method", function () {
        it("should transform a given camel case string to snake case.", function () {
            var strGiven = 'someCamelCase';
            var strResult = 'some_camel_case';
            expect(strGiven.toSnakeCase()).to.be.equal(strResult);
        });
        it("should transform a given constant case string to snake case.", function () {
            var strGiven = 'SOME_CONSTANT_CASE';
            var strResult = 'some_constant_case';
            expect(strGiven.toSnakeCase()).to.be.equal(strResult);
        });
        it("should transform a given dash case string to snake case.", function () {
            var strGiven = 'some-dash-case';
            var strResult = 'some_dash_case';
            expect(strGiven.toSnakeCase()).to.be.equal(strResult);
        });
        it("should transform a given pascal case string to snake case.", function () {
            var strGiven = 'SomePascalCase';
            var strResult = 'some_pascal_case';
            expect(strGiven.toSnakeCase()).to.be.equal(strResult);
        });
        it("should transform a given space case string to snake case.", function () {
            var strGiven = 'some space case';
            var strResult = 'some_space_case';
            expect(strGiven.toSnakeCase()).to.be.equal(strResult);
        });
        it("should transform a given string to snake case.", function () {
            var strGiven = 'Some string with inter-mixed specialChars.';
            var strResult = 'some_string_with_inter_mixed_special_chars.';
            expect(strGiven.toSnakeCase()).to.be.equal(strResult);
        });
    });
    // ***************************************************************************
    describe("when using the 'toSpaceCase' method", function () {
        it("should transform a given camel case string to space case.", function () {
            var strGiven = 'someCamelCase';
            var strResult = 'some camel case';
            expect(strGiven.toSpaceCase()).to.be.equal(strResult);
        });
        it("should transform a given constant case string to space case.", function () {
            var strGiven = 'SOME_CONSTANT_CASE';
            var strResult = 'some constant case';
            expect(strGiven.toSpaceCase()).to.be.equal(strResult);
        });
        it("should transform a given dash case string to space case.", function () {
            var strGiven = 'some-dash-case';
            var strResult = 'some dash case';
            expect(strGiven.toSpaceCase()).to.be.equal(strResult);
        });
        it("should transform a given pascal case string to space case.", function () {
            var strGiven = 'SomePascalCase';
            var strResult = 'some pascal case';
            expect(strGiven.toSpaceCase()).to.be.equal(strResult);
        });
        it("should transform a given snake case string to space case.", function () {
            var strGiven = 'some_snake_case';
            var strResult = 'some snake case';
            expect(strGiven.toSpaceCase()).to.be.equal(strResult);
        });
        it("should transform a given string to space case.", function () {
            var strGiven = 'Some string with inter-mixed specialChars.';
            var strResult = 'some string with inter mixed special chars.';
            expect(strGiven.toSpaceCase()).to.be.equal(strResult);
        });
    });
    // ***************************************************************************
});
// *****************************************************************************

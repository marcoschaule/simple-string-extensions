// *****************************************************************************
// Imports
// *****************************************************************************

import * as chai from 'chai';
import './text-transform';

// *****************************************************************************
// Locals
// *****************************************************************************

const expect = chai.expect;

// *****************************************************************************
// Tests
// *****************************************************************************

describe(`The text transform extension of JavaScript's String class`, () => {
  describe(`when using the 'capitalize' method`, () => {
    it(`should capitalize a given string starting with a lower case letter.`, () => {
      const strGiven  = 'someString';
      const strResult = 'SomeString';
      expect(strGiven.capitalize()).to.be.equal(strResult);
    });
    it(`should trim a string before capitalizing it.`, () => {
      const strResult = 'SomeString';
      let strGiven;
      strGiven = 'someString ';
      expect(strGiven.capitalize()).to.be.equal(strResult);
      strGiven = ' someString';
      expect(strGiven.capitalize()).to.be.equal(strResult);
      strGiven = ' someString ';
      expect(strGiven.capitalize()).to.be.equal(strResult);
    });
    it(`should not capitalize a given string if not starting with a letter.`, () => {
      const strGiven  = '_someString';
      const strResult = '_SomeString';
      expect(strGiven.capitalize()).not.to.be.equal(strResult);
      expect(strGiven.capitalize()).to.be.equal(strGiven);
    });
  });

  // ***************************************************************************

  describe(`when using the 'toCamelCase' method`, () => {
    it(`should transform a given constant case string to camel case.`, () => {
      const strGiven  = 'SOME_CONSTANT_CASE';
      const strResult = 'someConstantCase';
      expect(strGiven.toCamelCase()).to.be.equal(strResult);
    });
    it(`should transform a given dash case string to camel case.`, () => {
      const strGiven  = 'some-dash-case';
      const strResult = 'someDashCase';
      expect(strGiven.toCamelCase()).to.be.equal(strResult);
    });
    it(`should transform a given pascal case string to camel case.`, () => {
      const strGiven  = 'SomePascalCase';
      const strResult = 'somePascalCase';
      expect(strGiven.toCamelCase()).to.be.equal(strResult);
    });
    it(`should transform a given snake case string to camel case.`, () => {
      const strGiven  = 'some_snake_case';
      const strResult = 'someSnakeCase';
      expect(strGiven.toCamelCase()).to.be.equal(strResult);
    });
    it(`should transform a given space case string to camel case.`, () => {
      const strGiven  = 'some space case';
      const strResult = 'someSpaceCase';
      expect(strGiven.toCamelCase()).to.be.equal(strResult);
    });

    it(`should transform a given string to camel case.`, () => {
      const strGiven  = 'Some string with inter-mixed specialChars.';
      const strResult = 'someStringWithInterMixedSpecialChars.';
      expect(strGiven.toCamelCase()).to.be.equal(strResult);
    });
  });

  // ***************************************************************************

  describe(`when using the 'toConstantCase' method`, () => {
    it(`should transform a given camel case string to constant case.`, () => {
      const strGiven  = 'someCamelCase';
      const strResult = 'SOME_CAMEL_CASE';
      expect(strGiven.toConstantCase()).to.be.equal(strResult);
    });
    it(`should transform a given dash case string to constant case.`, () => {
      const strGiven  = 'some-dash-case';
      const strResult = 'SOME_DASH_CASE';
      expect(strGiven.toConstantCase()).to.be.equal(strResult);
    });
    it(`should transform a given pascal case string to constant case.`, () => {
      const strGiven  = 'SomePascalCase';
      const strResult = 'SOME_PASCAL_CASE';
      expect(strGiven.toConstantCase()).to.be.equal(strResult);
    });
    it(`should transform a given snake case string to constant case.`, () => {
      const strGiven  = 'some_snake_case';
      const strResult = 'SOME_SNAKE_CASE';
      expect(strGiven.toConstantCase()).to.be.equal(strResult);
    });
    it(`should transform a given space case string to constant case.`, () => {
      const strGiven  = 'some space case';
      const strResult = 'SOME_SPACE_CASE';
      expect(strGiven.toConstantCase()).to.be.equal(strResult);
    });

    it(`should transform a given string to constant case.`, () => {
      const strGiven  = 'Some string with inter-mixed specialChars.';
      const strResult = 'SOME_STRING_WITH_INTER_MIXED_SPECIAL_CHARS.';
      expect(strGiven.toConstantCase()).to.be.equal(strResult);
    });
  });

  // ***************************************************************************

  describe(`when using the 'toDashCase' method`, () => {
    it(`should transform a given camel case string to dash case.`, () => {
      const strGiven  = 'someCamelCase';
      const strResult = 'some-camel-case';
      expect(strGiven.toDashCase()).to.be.equal(strResult);
    });
    it(`should transform a given dash case string to dash case.`, () => {
      const strGiven  = 'SOME_CONSTANT_CASE';
      const strResult = 'some-constant-case';
      expect(strGiven.toDashCase()).to.be.equal(strResult);
    });
    it(`should transform a given pascal case string to dash case.`, () => {
      const strGiven  = 'SomePascalCase';
      const strResult = 'some-pascal-case';
      expect(strGiven.toDashCase()).to.be.equal(strResult);
    });
    it(`should transform a given snake case string to dash case.`, () => {
      const strGiven  = 'some_snake_case';
      const strResult = 'some-snake-case';
      expect(strGiven.toDashCase()).to.be.equal(strResult);
    });
    it(`should transform a given space case string to dash case.`, () => {
      const strGiven  = 'some space case';
      const strResult = 'some-space-case';
      expect(strGiven.toDashCase()).to.be.equal(strResult);
    });
    it(`should transform a given string to dash case.`, () => {
      const strGiven  = 'Some string with inter-mixed specialChars.';
      const strResult = 'some-string-with-inter-mixed-special-chars.';
      expect(strGiven.toDashCase()).to.be.equal(strResult);
    });
  });

  // ***************************************************************************

  describe(`when using the 'toPascalCase' method`, () => {
    it(`should transform a given camel case string to pascal case.`, () => {
      const strGiven  = 'someCamelCase';
      const strResult = 'SomeCamelCase';
      expect(strGiven.toPascalCase()).to.be.equal(strResult);
    });
    it(`should transform a given constant case string to pascal case.`, () => {
      const strGiven  = 'SOME_CONSTANT_CASE';
      const strResult = 'SomeConstantCase';
      expect(strGiven.toPascalCase()).to.be.equal(strResult);
    });
    it(`should transform a given dash case string to pascal case.`, () => {
      const strGiven  = 'some-dash-case';
      const strResult = 'SomeDashCase';
      expect(strGiven.toPascalCase()).to.be.equal(strResult);
    });
    it(`should transform a given snake case string to pascal case.`, () => {
      const strGiven  = 'some_snake_case';
      const strResult = 'SomeSnakeCase';
      expect(strGiven.toPascalCase()).to.be.equal(strResult);
    });
    it(`should transform a given space case string to pascal case.`, () => {
      const strGiven  = 'some space case';
      const strResult = 'SomeSpaceCase';
      expect(strGiven.toPascalCase()).to.be.equal(strResult);
    });

    it(`should transform a given string to pascal case.`, () => {
      const strGiven  = 'Some string with inter-mixed specialChars.';
      const strResult = 'SomeStringWithInterMixedSpecialChars.';
      expect(strGiven.toPascalCase()).to.be.equal(strResult);
    });
  });

  // ***************************************************************************

  describe(`when using the 'toSnakeCase' method`, () => {
    it(`should transform a given camel case string to snake case.`, () => {
      const strGiven  = 'someCamelCase';
      const strResult = 'some_camel_case';
      expect(strGiven.toSnakeCase()).to.be.equal(strResult);
    });
    it(`should transform a given constant case string to snake case.`, () => {
      const strGiven  = 'SOME_CONSTANT_CASE';
      const strResult = 'some_constant_case';
      expect(strGiven.toSnakeCase()).to.be.equal(strResult);
    });
    it(`should transform a given dash case string to snake case.`, () => {
      const strGiven  = 'some-dash-case';
      const strResult = 'some_dash_case';
      expect(strGiven.toSnakeCase()).to.be.equal(strResult);
    });
    it(`should transform a given pascal case string to snake case.`, () => {
      const strGiven  = 'SomePascalCase';
      const strResult = 'some_pascal_case';
      expect(strGiven.toSnakeCase()).to.be.equal(strResult);
    });
    it(`should transform a given space case string to snake case.`, () => {
      const strGiven  = 'some space case';
      const strResult = 'some_space_case';
      expect(strGiven.toSnakeCase()).to.be.equal(strResult);
    });

    it(`should transform a given string to snake case.`, () => {
      const strGiven  = 'Some string with inter-mixed specialChars.';
      const strResult = 'some_string_with_inter_mixed_special_chars.';
      expect(strGiven.toSnakeCase()).to.be.equal(strResult);
    });
  });

  // ***************************************************************************

  describe(`when using the 'toSpaceCase' method`, () => {
    it(`should transform a given camel case string to space case.`, () => {
      const strGiven  = 'someCamelCase';
      const strResult = 'some camel case';
      expect(strGiven.toSpaceCase()).to.be.equal(strResult);
    });
    it(`should transform a given constant case string to space case.`, () => {
      const strGiven  = 'SOME_CONSTANT_CASE';
      const strResult = 'some constant case';
      expect(strGiven.toSpaceCase()).to.be.equal(strResult);
    });
    it(`should transform a given dash case string to space case.`, () => {
      const strGiven  = 'some-dash-case';
      const strResult = 'some dash case';
      expect(strGiven.toSpaceCase()).to.be.equal(strResult);
    });
    it(`should transform a given pascal case string to space case.`, () => {
      const strGiven  = 'SomePascalCase';
      const strResult = 'some pascal case';
      expect(strGiven.toSpaceCase()).to.be.equal(strResult);
    });
    it(`should transform a given snake case string to space case.`, () => {
      const strGiven  = 'some_snake_case';
      const strResult = 'some snake case';
      expect(strGiven.toSpaceCase()).to.be.equal(strResult);
    });

    it(`should transform a given string to space case.`, () => {
      const strGiven  = 'Some string with inter-mixed specialChars.';
      const strResult = 'some string with inter mixed special chars.';
      expect(strGiven.toSpaceCase()).to.be.equal(strResult);
    });
  });

  // ***************************************************************************
});

// *****************************************************************************

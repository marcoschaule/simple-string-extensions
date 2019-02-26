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

/**
 * Simple extension of the JavaScript String class.
 *
 * @author Marco Schaule <marco.schaule@net-designer.net>
 */
export {};
declare global {
    interface String {
        capitalize(): string;
        toCamelCase(): string;
        toConstantCase(): string;
        toDashCase(): string;
        toPascalCase(): string;
        toSnakeCase(): string;
        toSpaceCase(): string;
    }
}

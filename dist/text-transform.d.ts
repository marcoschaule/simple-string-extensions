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

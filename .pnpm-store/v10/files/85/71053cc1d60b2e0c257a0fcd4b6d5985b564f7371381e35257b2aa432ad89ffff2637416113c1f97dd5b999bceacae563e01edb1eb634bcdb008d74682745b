declare function mergeUnique(key: string, uniques: string[], getter: (a: object) => string): (a: [], b: [], k: string) => false | any[];

type Key = string;
type Customize = (a: any, b: any, key: Key) => any;
interface ICustomizeOptions {
    customizeArray?: Customize;
    customizeObject?: Customize;
}
declare enum CustomizeRule {
    Match = "match",
    Merge = "merge",
    Append = "append",
    Prepend = "prepend",
    Replace = "replace"
}
type CustomizeRuleString = "match" | "merge" | "append" | "prepend" | "replace";

declare function merge<Configuration extends object>(firstConfiguration: Configuration | Configuration[], ...configurations: Configuration[]): Configuration;
declare function mergeWithCustomize<Configuration extends object>(options: ICustomizeOptions): (firstConfiguration: Configuration | Configuration[], ...configurations: Configuration[]) => Configuration;
declare function customizeArray(rules: {
    [s: string]: CustomizeRule | CustomizeRuleString;
}): (a: any, b: any, key: Key) => any;
type Rules = {
    [s: string]: CustomizeRule | CustomizeRuleString | Rules;
};
declare function mergeWithRules(rules: Rules): (firstConfiguration: object | object[], ...configurations: object[]) => object;
declare function customizeObject(rules: {
    [s: string]: CustomizeRule | CustomizeRuleString;
}): (a: any, b: any, key: Key) => any;

export { CustomizeRule, customizeArray, customizeObject, merge as default, merge, mergeWithCustomize, mergeWithRules, mergeUnique as unique };

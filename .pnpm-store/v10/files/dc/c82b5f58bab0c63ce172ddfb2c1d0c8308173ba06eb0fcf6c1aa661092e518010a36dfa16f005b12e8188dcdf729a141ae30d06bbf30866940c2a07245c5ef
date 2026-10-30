import { Nullable } from 'util-ts-types';
export interface ParsedTypingDescriptionMember {
    name: string;
    description: string;
    typingDescription: string;
    default: Nullable<string>;
    required: boolean;
}
export interface ParsedTypingDescription {
    name: string;
    members: ParsedTypingDescriptionMember[];
    description: string;
}
export declare class TSSourceParser {
    static parseTypingDeclaration(filePath: string, name: string): Nullable<ParsedTypingDescription>;
    static findTargetExport(filePath: string, functionName: string): Nullable<string>;
}

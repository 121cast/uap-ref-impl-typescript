import type { OsOutput, OsParsers } from "./types";
export declare function makeDefault(str: string): OsOutput;
export declare function makeParser(obj: OsParsers): (str: string) => OsOutput | null;

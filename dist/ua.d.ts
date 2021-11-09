import type { UaOutput, UaParsers } from "./types";
export declare function makeDefault(str: string): UaOutput;
export declare function makeParser(obj: UaParsers): (str: string) => UaOutput | null;

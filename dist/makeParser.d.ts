import type { UaParsers, OsParsers, DeviceParsers, UaOutput, OsOutput, DeviceOutput } from "./types";
export declare function makeParser<T extends UaParsers | OsParsers | DeviceParsers, R extends UaOutput | OsOutput | DeviceOutput>(regexes: T[], parserMaker: (obj: T) => (str: string) => R | null, defaultObjMaker: (str: string) => R): (str: string) => R;

import type {
  UaParsers,
  OsParsers,
  DeviceParsers,
  UaOutput,
  OsOutput,
  DeviceOutput,
} from "./types";

export function makeParser<
  T extends UaParsers | OsParsers | DeviceParsers,
  R extends UaOutput | OsOutput | DeviceOutput
>(
  regexes: T[],
  parserMaker: (obj: T) => (str: string) => R | null,
  defaultObjMaker: (str: string) => R
) {
  const parsers = regexes.map(parserMaker);

  function parser(str: string) {
    let obj;

    if (typeof str === "string") {
      for (let i = 0, length = parsers.length; i < length; i++) {
        obj = parsers[i](str);
        if (obj) {
          return obj;
        }
      }
    }

    return defaultObjMaker(str);
  }

  return parser;
}

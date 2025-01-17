import { replaceMatches } from "./replaceMatches";
import type { OsOutput, OsParsers } from "./types";

export function makeDefault(str: string): OsOutput {
  return {
    userAgent: str,
    family: "Other",
    major: null,
    minor: null,
    patch: null,
    patchMinor: null,
  };
}

export function makeParser(obj: OsParsers) {
  const regexp = new RegExp(obj.regex);
  const famRep = obj.os_replacement;
  const majorRep = obj.os_v1_replacement;
  const minorRep = obj.os_v2_replacement;
  const patchRep = obj.os_v3_replacement;
  const patchMinorRep = obj.os_v4_replacement;

  function parser(str: string): OsOutput | null {
    const m = str.match(regexp);
    if (!m) {
      return null;
    }

    return {
      userAgent: str,
      family: famRep === '' ? '' : (famRep ? replaceMatches(famRep, m) : m[1]) || "Other",
      major: majorRep === '' ? '' : (majorRep ? replaceMatches(majorRep, m) : m[2]) || null,
      minor: minorRep === '' ? '' : (minorRep ? replaceMatches(minorRep, m) : m[3]) || null,
      patch: patchRep === '' ? '' : (patchRep ? replaceMatches(patchRep, m) : m[4]) || null,
      patchMinor:
      patchMinorRep === '' ? '' : (patchMinorRep ? replaceMatches(patchMinorRep, m) : m[5]) || null,
    };
  }

  return parser;
}

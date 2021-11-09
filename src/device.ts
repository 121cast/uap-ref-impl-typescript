import { replaceMatches } from "./replaceMatches";
import type { DeviceOutput, DeviceParsers } from "./types";

export function makeDefault(str: string): DeviceOutput {
  return {
    userAgent: str,
    family: "Other",
    brand: null,
    model: null,
  };
}

export function makeParser(obj: DeviceParsers) {
  const regexp = new RegExp(obj.regex, obj.regex_flag || "");
  const deviceRep = obj.device_replacement;
  const brandRep = obj.brand_replacement;
  const modelRep = obj.model_replacement;

  function parser(str: string): DeviceOutput | null {
    const m = str.match(regexp);
    if (!m) {
      return null;
    }

    return {
      userAgent: str,
      family: (deviceRep ? replaceMatches(deviceRep, m) : m[1]) || "Other",
      brand: (brandRep ? replaceMatches(brandRep, m) : null) || null,
      model: (modelRep ? replaceMatches(modelRep, m) : m[1]) || null,
    };
  }

  return parser;
}

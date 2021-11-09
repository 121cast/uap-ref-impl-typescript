import { Results } from "./results";
import { makeParser } from "./makeParser";
import * as ua from "./ua";
import * as os from "./os";
import * as device from "./device";
import type { Parsers } from "./types";

export default function (regexes: Parsers) {
  const parseUA = makeParser(
    regexes.user_agent_parsers,
    ua.makeParser,
    ua.makeDefault
  );
  const parseOS = makeParser(regexes.os_parsers, os.makeParser, os.makeDefault);
  const parseDevice = makeParser(
    regexes.device_parsers,
    device.makeParser,
    device.makeDefault
  );

  function parse(str: string) {
    const ua = parseUA(str);
    const os = parseOS(str);
    const device = parseDevice(str);
    return Results(str, ua, os, device);
  }

  return {
    parse: parse,
    parseUA: parseUA,
    parseOS: parseOS,
    parseDevice: parseDevice,
  };
}

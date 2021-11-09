import type { DeviceOutput, OsOutput, UaOutput } from "./types";

export function Results(
  uaStr: string,
  ua: UaOutput,
  os: OsOutput,
  device: DeviceOutput
) {
  const { userAgent: uaUserAgent, ...uaClean } = ua;
  const { userAgent: osUserAgent, ...osClean } = os;
  const { userAgent: deviceUserAgent, ...deviceClean } = device;

  return {
    userAgent: uaStr,
    ua: uaClean,
    os: osClean,
    device: deviceClean,
  };
}

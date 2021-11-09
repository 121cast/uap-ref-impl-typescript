import type { DeviceOutput, DeviceParsers } from "./types";
export declare function makeDefault(str: string): DeviceOutput;
export declare function makeParser(obj: DeviceParsers): (str: string) => DeviceOutput | null;

import type { DeviceOutput, OsOutput, UaOutput } from "./types";
export declare function Results(uaStr: string, ua: UaOutput, os: OsOutput, device: DeviceOutput): {
    userAgent: string;
    ua: {
        family: string;
        major: string | null;
        minor: string | null;
        patch: string | null;
    };
    os: {
        family: string;
        major: string | null;
        minor: string | null;
        patch: string | null;
        patchMinor: string | null;
    };
    device: {
        family: string;
        brand: string | null;
        model: string | null;
    };
};

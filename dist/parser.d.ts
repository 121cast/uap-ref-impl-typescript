import type { Parsers } from "./types";
export default function (regexes: Parsers): {
    parse: (str: string) => {
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
    parseUA: (str: string) => import("./types").UaOutput;
    parseOS: (str: string) => import("./types").OsOutput;
    parseDevice: (str: string) => import("./types").DeviceOutput;
};

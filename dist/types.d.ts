export declare type Parsers = {
    user_agent_parsers: UaParsers[];
    os_parsers: OsParsers[];
    device_parsers: DeviceParsers[];
};
export declare type UaParsers = {
    regex: string;
    family_replacement?: string;
    v1_replacement?: string;
    v2_replacement?: string;
    v3_replacement?: string;
};
export declare type OsParsers = {
    regex: string;
    os_replacement?: string;
    os_v1_replacement?: string;
    os_v2_replacement?: string;
    os_v3_replacement?: string;
    os_v4_replacement?: string;
};
export declare type DeviceParsers = {
    regex: string;
    regex_flag?: string;
    device_replacement?: string;
    brand_replacement?: string;
    model_replacement?: string;
};
export declare type UaOutput = {
    userAgent: string;
    family: string;
    major: string | null;
    minor: string | null;
    patch: string | null;
};
export declare type OsOutput = {
    userAgent: string;
    family: string;
    major: string | null;
    minor: string | null;
    patch: string | null;
    patchMinor: string | null;
};
export declare type DeviceOutput = {
    userAgent: string;
    family: string;
    brand: string | null;
    model: string | null;
};
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var results_1 = require("./results");
var makeParser_1 = require("./makeParser");
var ua = __importStar(require("./ua"));
var os = __importStar(require("./os"));
var device = __importStar(require("./device"));
function default_1(regexes) {
    var parseUA = (0, makeParser_1.makeParser)(regexes.user_agent_parsers, ua.makeParser, ua.makeDefault);
    var parseOS = (0, makeParser_1.makeParser)(regexes.os_parsers, os.makeParser, os.makeDefault);
    var parseDevice = (0, makeParser_1.makeParser)(regexes.device_parsers, device.makeParser, device.makeDefault);
    function parse(str) {
        var ua = parseUA(str);
        var os = parseOS(str);
        var device = parseDevice(str);
        return (0, results_1.Results)(str, ua, os, device);
    }
    return {
        parse: parse,
        parseUA: parseUA,
        parseOS: parseOS,
        parseDevice: parseDevice
    };
}
exports["default"] = default_1;
//# sourceMappingURL=parser.js.map
"use strict";
exports.__esModule = true;
exports.makeParser = exports.makeDefault = void 0;
var replaceMatches_1 = require("./replaceMatches");
function makeDefault(str) {
    return {
        userAgent: str,
        family: "Other",
        major: null,
        minor: null,
        patch: null,
        patchMinor: null
    };
}
exports.makeDefault = makeDefault;
function makeParser(obj) {
    var regexp = new RegExp(obj.regex);
    var famRep = obj.os_replacement;
    var majorRep = obj.os_v1_replacement;
    var minorRep = obj.os_v2_replacement;
    var patchRep = obj.os_v3_replacement;
    var patchMinorRep = obj.os_v4_replacement;
    function parser(str) {
        var m = str.match(regexp);
        if (!m) {
            return null;
        }
        return {
            userAgent: str,
            family: famRep === '' ? '' : (famRep ? (0, replaceMatches_1.replaceMatches)(famRep, m) : m[1]) || "Other",
            major: majorRep === '' ? '' : (majorRep ? (0, replaceMatches_1.replaceMatches)(majorRep, m) : m[2]) || null,
            minor: minorRep === '' ? '' : (minorRep ? (0, replaceMatches_1.replaceMatches)(minorRep, m) : m[3]) || null,
            patch: patchRep === '' ? '' : (patchRep ? (0, replaceMatches_1.replaceMatches)(patchRep, m) : m[4]) || null,
            patchMinor: patchMinorRep === '' ? '' : (patchMinorRep ? (0, replaceMatches_1.replaceMatches)(patchMinorRep, m) : m[5]) || null
        };
    }
    return parser;
}
exports.makeParser = makeParser;
//# sourceMappingURL=os.js.map
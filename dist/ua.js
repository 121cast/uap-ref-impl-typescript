"use strict";
exports.__esModule = true;
exports.makeParser = exports.makeDefault = void 0;
function makeDefault(str) {
    return {
        userAgent: str,
        family: "Other",
        major: null,
        minor: null,
        patch: null
    };
}
exports.makeDefault = makeDefault;
function makeParser(obj) {
    var regexp = new RegExp(obj.regex);
    var famRep = obj.family_replacement;
    var majorRep = obj.v1_replacement;
    var minorRep = obj.v2_replacement;
    var patchRep = obj.v3_replacement;
    function parser(str) {
        var m = str.match(regexp);
        if (!m) {
            return null;
        }
        return {
            userAgent: str,
            family: famRep ? famRep.replace("$1", m[1]) : m[1],
            major: majorRep === '' ? '' : majorRep || m[2] || null,
            minor: minorRep === '' ? '' : minorRep || m[3] || null,
            patch: patchRep === '' ? '' : patchRep || m[4] || null
        };
    }
    return parser;
}
exports.makeParser = makeParser;
//# sourceMappingURL=ua.js.map
"use strict";
exports.__esModule = true;
exports.replaceMatches = void 0;
function replaceMatches(str, m) {
    return str
        .replace(/\$(\d)/g, function (tmp, i) {
        return m[i] || "";
    })
        .trim();
}
exports.replaceMatches = replaceMatches;
//# sourceMappingURL=replaceMatches.js.map
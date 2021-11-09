export function replaceMatches(str: string, m: RegExpMatchArray) {
    return str
        .replace(/\$(\d)/g, function (tmp, i) {
            return m[i] || "";
        })
        .trim();
}

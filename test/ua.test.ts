import { makeParser } from "../dist/ua";

describe("UA parser", () => {
  it("makeParser returns a function", () => {
    expect(typeof makeParser({ regex: "" })).toBe("function");
  });

  it('Parser returns family "undefined" when no match is found', () => {
    const parse = makeParser({ regex: "" });
    expect(parse("foo")).toStrictEqual({
      family: undefined,
      major: null,
      minor: null,
      patch: null,
      userAgent: "foo",
    });
  });

  it("Parser correctly identifies UA name", () => {
    const parse = makeParser({ regex: "(foo)" });
    expect(parse("foo")?.family).toBe("foo");
  });

  it("Parser correctly identifies version numbers", () => {
    const parse = makeParser({ regex: "(foo) (\\d)\\.(\\d)\\.(\\d)" });
    const ua = parse("foo 1.2.3");
    expect(ua?.family).toBe("foo");
    expect(ua?.major).toBe("1");
    expect(ua?.minor).toBe("2");
    expect(ua?.patch).toBe("3");
  });

  it("Parser correctly processes replacements", () => {
    const parse = makeParser({
      regex: "(foo) (\\d)\\.(\\d).(\\d)",
      family_replacement: "$1bar",
      v1_replacement: "a",
      v2_replacement: "b",
      v3_replacement: "c",
    });

    const ua = parse("foo 1.2.3");
    expect(ua?.family).toBe("foobar");
    expect(ua?.major).toBe("a");
    expect(ua?.minor).toBe("b");
    expect(ua?.patch).toBe("c");
  });

  it("Parser returns empty string if replacement is empty string", function () {
    const parse = makeParser({
      regex: "(foobar)",
      family_replacement: "foobar",
      v1_replacement: "",
      v2_replacement: "",
      v3_replacement: "",
    });

    const ua = parse("foobar");
    expect(ua?.family).toBe("foobar");
    expect(ua?.major).toBe("");
    expect(ua?.minor).toBe("");
    expect(ua?.patch).toBe("");
  });
});

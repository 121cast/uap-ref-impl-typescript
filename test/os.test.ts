import { makeParser } from "../dist/os";

describe("OS parser", function () {
  it("makeParser returns a function", function () {
    expect(typeof makeParser({ regex: "" })).toBe("function");
  });

  it('Parser returns family "Other" when no match is found', function () {
    const parse = makeParser({ regex: "" });
    expect(parse("foo")).toStrictEqual({
      family: "Other",
      major: null,
      minor: null,
      patch: null,
      patchMinor: null,
      userAgent: "foo",
    });
  });

  it("Parser correctly identifies OS name", function () {
    const parse = makeParser({ regex: "(foo)" });
    expect(parse("foo")?.family).toBe("foo");
  });

  it("Parser correctly identifies version numbers", function () {
    const parse = makeParser({ regex: "(foo) (\\d)\\.(\\d).(\\d)\\.(\\d)" });
    const os = parse("foo 1.2.3.4");
    expect(os?.family).toBe("foo");
    expect(os?.major).toBe("1");
    expect(os?.minor).toBe("2");
    expect(os?.patch).toBe("3");
    expect(os?.patchMinor).toBe("4");
  });

  it("Parser correctly processes replacements", function () {
    const parse = makeParser({
      regex: "(foo) (\\d)\\.(\\d)\\.(\\d)\\.(\\d)",
      os_replacement: "$1bar",
      os_v1_replacement: "a",
      os_v2_replacement: "b",
      os_v3_replacement: "c",
      os_v4_replacement: "d",
    });

    const os = parse("foo 1.2.3.4");
    expect(os?.family).toBe("foobar");
    expect(os?.major).toBe("a");
    expect(os?.minor).toBe("b");
    expect(os?.patch).toBe("c");
  });

  it("Parser returns empty string if replacement is empty string", function () {
    const parse = makeParser({
      regex: "(foobar)",
      os_replacement: "",
      os_v1_replacement: "",
      os_v2_replacement: "",
      os_v3_replacement: "",
      os_v4_replacement: "",
    });

    const os = parse("foobar");
    expect(os?.family).toBe("");
    expect(os?.major).toBe("");
    expect(os?.minor).toBe("");
    expect(os?.patch).toBe("");
  });
});

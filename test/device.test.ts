import { makeParser } from "../dist/device";

describe("Device parser", function () {
  it("makeParser returns a function", function () {
    expect(typeof makeParser({ regex: "" })).toBe("function");
  });

  it('Parser returns family "Other" when no match is found', function () {
    const parse = makeParser({ regex: "" });
    expect(parse("foo")).toStrictEqual({
      family: "Other",
      brand: null,
      model: null,
      userAgent: "foo",
    });
  });

  it("Parser correctly identifies Device name", function () {
    const parse = makeParser({ regex: "(foo)" });
    expect(parse("foo")?.family).toBe("foo");
  });

  it("Parser correctly processes replacements", function () {
    const parse = makeParser({
      regex: "(foo)(bar)",
      device_replacement: "$1bar",
      brand_replacement: "$2",
      model_replacement: "$1",
    });

    const device = parse("foobar");
    expect(device?.family).toBe("foobar");
    expect(device?.brand).toBe("bar");
    expect(device?.model).toBe("foo");
  });

  it("Parser returns empty string if replacement is empty string", function () {
    const parse = makeParser({
      regex: "(foobar)",
      device_replacement: "",
      brand_replacement: "",
      model_replacement: "",
    });

    const device = parse("foobar");
    expect(device?.family).toBe("");
    expect(device?.brand).toBe("");
    expect(device?.model).toBe("");
  });
});

import path from "path";
import fs from "fs";
import YAML from "yaml";
import parser from "../dist/parser";

const uaparser = parser(readYAML("./regexes.yaml"));

function readYAML<T extends UserAgentTest | OsTest | DeviceTest>(
  fileName: string
) {
  const file = path.join(__dirname, fileName);
  const data = fs.readFileSync(file, "utf8");
  return YAML.parse(data) as TestYaml<T>;
}

[
  "./test_resources/firefox_user_agent_strings.yaml",
  "./test_ua.yaml",
  "./test_resources/pgts_browser_list.yaml",
  "./test_resources/opera_mini_user_agent_strings.yaml",
  "./test_resources/podcasting_user_agent_strings.yaml",
].forEach((fileName) => {
  describe(fileName, () => {
    const fixtures = readYAML<UserAgentTest>(fileName).test_cases;
    fixtures.forEach((f) => {
      test.concurrent(f.user_agent_string, () => {
        const ua = uaparser.parse(f.user_agent_string).ua;
        expect(ua.family).toBe(f.family);
        expect(ua.major).toBe(f.major);
        expect(ua.minor).toBe(f.minor);
        expect(ua.patch).toBe(f.patch);
      });
    });
  });
});

["./test_os.yaml", "./test_resources/additional_os_tests.yaml"].forEach(
  (fileName) => {
    describe(fileName, () => {
      const fixtures = readYAML<OsTest>(fileName).test_cases;
      fixtures.forEach((f) => {
        test.concurrent(f.user_agent_string, () => {
          const os = uaparser.parse(f.user_agent_string).os;
          expect(os.family).toBe(f.family);
          expect(os.major).toBe(f.major);
          expect(os.minor).toBe(f.minor);
          expect(os.patch).toBe(f.patch);
          expect(os.patchMinor).toBe(f.patch_minor);
        });
      });
    });
  }
);

["./test_device.yaml"].forEach((fileName) => {
  describe(fileName, () => {
    const fixtures = readYAML<DeviceTest>(fileName).test_cases;
    fixtures.forEach((f) => {
      test.concurrent(f.user_agent_string, () => {
        const device = uaparser.parse(f.user_agent_string).device;
        expect(device.family).toBe(f.family);
        expect(device.brand).toBe(f.brand);
        expect(device.model).toBe(f.model);
      });
    });
  });
});

type TestYaml<T extends UserAgentTest | OsTest | DeviceTest> = {
  test_cases: T[];
};

type UserAgentTest = {
  user_agent_string: string;
  family: string | null;
  major: string | null;
  minor: string | null;
  patch: string | null;
};

type OsTest = {
  user_agent_string: string;
  family: string | null;
  major: string | null;
  minor: string | null;
  patch: string | null;
  patch_minor: string | null;
};

type DeviceTest = {
  user_agent_string: string;
  family: string | null;
  brand: string | null;
  model: string | null;
};

import path from 'path';

const testResults: { description: string; passed: boolean }[] = [];

function relativeap() {
  return path.relative(process.cwd(), __filename);
}

async function tasync<U>(func: () => Promise<U>, expected: string) {
  const res = await func();
  if (typeof res !== expected) {
    throw new Error(`Expected ${expected} but received ${typeof res}`);
  }
}

function expect(actual: any, expectedType: string) {
  const passed = typeof actual === expectedType;
  testResults.push({
    description: `Expecting ${typeof actual} to be ${expectedType}`,
    passed,
  });
  if (!passed) {
    throw new Error(`Expected ${expectedType} but received ${typeof actual}`);
  }
}

function title(title: string, testSuite: () => void) {
  console.log(title);
  testSuite();
}

function it(description: string, testCase: () => void) {
  try {
    console.log(`  ${description}`);
    testCase();
    console.log(`    ✔︎ Passed ./${relativeap()}`);
  } catch (error) {
    console.error(`    ✘ Failed: ${(error as Error).message}`);
  }
}

interface InstanceReturn<K> {
  expect: (expectedType: string) => void;
  tasync: (func: Promise<K>, expected: string) => void
}

function t(value: any): InstanceReturn<{}> {
  return {
    expect(expectedType) {
      expect(value, expectedType);
    },
    tasync(c, a) {
      tasync(c, a);
    },
  };
}

export { title, it, t };

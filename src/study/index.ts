/* case 1 (initial) */
const testResults: { description: string; passed: boolean }[] = [];

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
    console.log('    ✔︎ Passed');
  } catch (error) {
    console.error(`    ✘ Failed: ${(error as Error).message}`);
  }
}

function t(value: any) {
  return {
    expect(expectedType: string) {
      expect(value, expectedType);
    },
  };
}

export { title, it, t };
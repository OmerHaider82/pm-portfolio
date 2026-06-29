// intentional-failure.test.js
//
// This test fails ON PURPOSE. It exists to demonstrate that the CI pipeline
// catches a failing test and blocks the pull request with a red ✗.
// Delete this file (or this branch) once the demo is done — it is not a real test.

describe("CI failure demo", () => {
  it("fails intentionally to prove CI catches broken tests", () => {
    // Asserting a falsehood so the test run exits non-zero.
    expect(true).toBe(false);
  });
});

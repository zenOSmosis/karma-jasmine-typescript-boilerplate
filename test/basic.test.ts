import mockUtility, { MockEnum } from "../src/index";

describe("mock utility", () => {
  it("returns expected value", () => {
    expect(mockUtility()).toBe(MockEnum.MockVal1);
  });
});

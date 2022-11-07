import sinon from "sinon";
import * as utils from "../src/index";

describe("basic tests", () => {
  const fakeTimer = sinon.useFakeTimers(new Date(2020, 1, 1));

  afterAll(() => {
    fakeTimer.restore();
  });

  it("gets fake date", () => {
    expect(new Date().getTime()).toEqual(new Date(2020, 1, 1).getTime());
  });

  it("handles spies", () => {
    const upperCaseSpy = spyOn(utils, "toUpperCase").and.callThrough();

    expect(utils.toUpperCase).toBeDefined();
    expect(utils.toUpperCase("hello world")).toEqual("HELLO WORLD");
    expect(upperCaseSpy).toHaveBeenCalledTimes(1);
    expect(upperCaseSpy).toHaveBeenCalledWith("hello world");

    expect(upperCaseSpy.calls.count()).toEqual(1);

    upperCaseSpy.calls.reset();

    expect(upperCaseSpy).toHaveBeenCalledTimes(0);
  });

  it("generates fibonacci", () => {
    expect(utils.fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

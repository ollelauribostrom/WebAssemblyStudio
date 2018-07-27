/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

import getConfig from "../../src/config";

function mockFetch(returnValue) {
  (global as any).fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => returnValue
  }));
  return () => (global as any).fetch = undefined;
}

describe("Tests for getConfig", () => {
  it("should load the config from config.json", async () => {
    const restoreFetch = mockFetch({ a: 1, b: 2 });
    await expect(getConfig()).resolves.toEqual({ a: 1, b: 2 });
    expect((global as any).fetch).toHaveBeenCalledWith("./config.json");
    restoreFetch();
  });
  it("should return the config if it is already loaded", async () => {
    const restoreFetch = mockFetch({ a: 1, b: 2 });
    await expect(getConfig()).resolves.toEqual({ a: 1, b: 2 });
    expect((global as any).fetch).not.toHaveBeenCalled();
    restoreFetch();
  });
});

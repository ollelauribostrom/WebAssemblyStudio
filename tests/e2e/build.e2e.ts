/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

async function getDirectoryStructure() {
  return await page.evaluate((selector) => {
    let elements = Array.from(document.querySelectorAll(selector));
    return elements.map(element => element.textContent);
  }, "a.label-name");
}

describe("Create and Build E2E tests", () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
    await page.goto("https://localhost:28443");
  });
  it("should initialy display the Create New Project dialog", async () => {
    await expect(page).toMatch("Empty C Project");
  });
  it("should correctly create an Empty C Project when clicking the create button", async () => {
    await page.click("div.button[title=\"Create\"]");
    await page.waitForSelector("a.label-name");
    await expect(getDirectoryStructure()).resolves.toEqual([
      "README.md",
      "build.ts",
      "package.json",
      "src",
      "main.c",
      "main.html",
      "main.js"
    ]);
  });
  it("should correctly build the project", async () => {
    // Click the build button and wait for the request to finish
    await page.click("div.button[title=\"Build Project: CtrlCmd + B\"]");
    await page.waitFor(3000); // TODO: Remove hardcoded wait duration
    // Build a second time
    await page.click("div.button[title=\"Build Project: CtrlCmd + B\"]");
    await page.waitFor(3000); // TODO: Remove hardcoded wait duration
    await expect(getDirectoryStructure()).resolves.toEqual([
      "README.md",
      "build.ts",
      "package.json",
      "src",
      "main.c",
      "main.html",
      "main.js",
      "out",
      "main.wasm"
    ]);
  });
});

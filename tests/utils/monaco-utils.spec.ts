/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

import { MonacoUtils } from "../../src/monaco-utils";

describe("Tests for monaco-utils", () => {
  describe("initialize", () => {
    it("should import dependencies", async () => {
      expect(MonacoUtils.Tree).toBeUndefined();
      expect(MonacoUtils.ContextSubMenu).toBeUndefined();
      expect(MonacoUtils.ContextMenuService).toBeUndefined();
      expect(MonacoUtils.ContextViewService).toBeUndefined();
      expect(MonacoUtils.TreeDefaults).toBeUndefined();
      expect(MonacoUtils.Action).toBeUndefined();
      await MonacoUtils.initialize();
      expect(MonacoUtils.Tree).not.toBeUndefined();
      expect(MonacoUtils.ContextSubMenu).not.toBeUndefined();
      expect(MonacoUtils.ContextMenuService).not.toBeUndefined();
      expect(MonacoUtils.ContextViewService).not.toBeUndefined();
      expect(MonacoUtils.TreeDefaults).not.toBeUndefined();
      expect(MonacoUtils.Action).not.toBeUndefined();
    });
  });
});

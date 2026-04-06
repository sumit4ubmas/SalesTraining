import { describe, expect, it } from "vitest";

import { formatDateLabel } from "@sales-training/utils";

describe("formatDateLabel", () => {
  it("formats ISO dates for learner UI", () => {
    expect(formatDateLabel("2026-04-06")).toContain("2026");
  });
});

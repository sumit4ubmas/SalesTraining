import { describe, expect, it } from "vitest";

import { getMetricsSnapshot } from "../features/dashboard/get-metrics";

describe("getMetricsSnapshot", () => {
  it("returns base admin stats", () => {
    expect(getMetricsSnapshot().activeLearners).toBeGreaterThan(0);
  });
});

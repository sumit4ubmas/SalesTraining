import type { AdminMetrics } from "@sales-training/types";

export function getMetricsSnapshot(): AdminMetrics {
  return {
    activeLearners: 182,
    certificationsIssued: 74,
    completionRate: 0.87
  };
}

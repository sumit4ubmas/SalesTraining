import { formatPercent } from "@sales-training/utils";

import { StatCard } from "../components/stat-card";
import { getMetricsSnapshot } from "../features/dashboard/get-metrics";

export default function AdminHomePage() {
  const metrics = getMetricsSnapshot();

  return (
    <main style={{ padding: 24 }}>
      <h1>Admin Console</h1>
      <p>Track certifications, cohort performance, and learner outcomes.</p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(180px, 1fr))", gap: 16 }}>
        <StatCard label="Active Learners" value={String(metrics.activeLearners)} />
        <StatCard label="Certificates Issued" value={String(metrics.certificationsIssued)} />
        <StatCard label="Completion Rate" value={formatPercent(metrics.completionRate)} />
      </section>
    </main>
  );
}

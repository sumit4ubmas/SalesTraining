export type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <article style={{ border: "1px solid #1e293b", borderRadius: 12, padding: 16 }}>
      <p style={{ margin: 0, color: "#94a3b8", fontSize: 14 }}>{label}</p>
      <strong style={{ fontSize: 24 }}>{value}</strong>
    </article>
  );
}

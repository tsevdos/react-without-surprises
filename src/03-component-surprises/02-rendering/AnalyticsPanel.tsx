const METRICS = Array.from({ length: 160 }, (_, index) => ({
  id: index + 1,
  label: ["Gross sales", "Orders", "Returns", "New customers"][index % 4],
  value: `${((index * 17) % 900) + 100}`,
  change: `${index % 2 === 0 ? "+" : "-"}${(index % 12) + 1}%`,
}));

function MetricTile({ metric }: { metric: (typeof METRICS)[number] }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 3) {}

  return (
    <article className="priority-metric">
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <small>{metric.change} this month</small>
    </article>
  );
}

export default function AnalyticsPanel() {
  return (
    <section className="priority-metrics" aria-label="Store analytics">
      {METRICS.map((metric) => (
        <MetricTile key={metric.id} metric={metric} />
      ))}
    </section>
  );
}

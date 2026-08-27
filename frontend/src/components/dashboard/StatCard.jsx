function StatCard({ title, value, change, label }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span>{title}</span>
        <span className="stat-icon">↗</span>
      </div>

      <strong>{value}</strong>

      <div className="stat-footer">
        <span className="positive">{change}</span>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default StatCard;

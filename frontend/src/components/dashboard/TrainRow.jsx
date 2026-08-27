function TrainRow({ train, name, route, status, eta, statusType }) {
  return (
    <div className="train-row">
      <div className="train-number">{train}</div>

      <div className="train-info">
        <strong>{name}</strong>
        <span>{route}</span>
      </div>

      <div className={`train-status ${statusType}`}>
        <span></span>
        {status}
      </div>

      <div className="train-eta">
        <span>ETA</span>
        <strong>{eta}</strong>
      </div>
    </div>
  );
}

export default TrainRow;
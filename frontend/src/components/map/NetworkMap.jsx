function NetworkMap() {
  return (
    <section className="network-panel panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">NETWORK OVERVIEW</p>
          <h3>Live Railway Network</h3>
        </div>

        <button className="view-button">Open map →</button>
      </div>

      <div className="map-placeholder">
        <div className="map-grid"></div>

        <div className="map-center">
          <div className="map-pulse"></div>
          <strong>Live Network Map</strong>
          <span>GPS & operational data feed</span>
        </div>
      </div>
    </section>
  );
}

export default NetworkMap;
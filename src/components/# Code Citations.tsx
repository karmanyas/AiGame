# Code Citations

## License: MIT
https://github.com/ealush/emoji-picker-react/tree/c54390be6baecb7360fe012be3365b39b4b83ebd/src/components/ErrorBoundary.tsx

```
React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return {
```

## License: unknown
https://github.com/bacowan/sample-map-app/tree/4672db6d914c18e4d37bfa0db6c98822062f33f7/src/components/mapErrorBoundary.tsx

```
: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.
```

# Current Turn Details

import React, { useState } from 'react';
import './CurrentTurnDetails.css';

const CurrentTurnDetails: React.FC = () => {
  const modelConfidence = 75;
  const currentTurn = 12;
  const activePlayer = "AI Agent 1";
  const lastAction = "Produced 50 IPA units";

  // Add state for sliders
  const [price, setPrice] = useState(10);
  const [prodUnits, setProdUnits] = useState(50);

  return (
    <div className="current-turn-details">
      <ConfidenceMeter confidence={modelConfidence} />

      <div className="turn-info-grid">
        {/* ...existing info items... */}
        <div className="info-item">
          <span className="info-label">Turn:</span>
          <span className="info-value">{currentTurn}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Active Player:</span>
          <span className="info-value">{activePlayer}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Last Action:</span>
          <span className="info-value">{lastAction}</span>
        </div>
        {/* Add sliders */}
        <div className="info-item slider-item">
          <label className="info-label" htmlFor="price-slider">Price: <span className="info-value">${price}</span></label>
          <input
            id="price-slider"
            type="range"
            min={1}
            max={100}
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="slider"
          />
        </div>
        <div className="info-item slider-item">
          <label className="info-label" htmlFor="prod-slider">Production Units: <span className="info-value">{prodUnits}</span></label>
          <input
            id="prod-slider"
            type="range"
            min={1}
            max={200}
            value={prodUnits}
            onChange={e => setProdUnits(Number(e.target.value))}
            className="slider"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentTurnDetails;
import React, { useState } from 'react';
import './CurrentTurnDetails.css';

interface ConfidenceMeterProps {
  confidence: number;
  label?: string;
}

const ConfidenceMeter: React.FC<ConfidenceMeterProps> = ({ confidence, label = "Model Confidence" }) => {
  const getConfidenceColor = (value: number) => {
    if (value >= 80) return '#00ff88';
    if (value >= 60) return '#ffa502';
    if (value >= 40) return '#ff6b6b';
    return '#ff4757';
  };

  const getConfidenceLevel = (value: number) => {
    if (value >= 80) return 'HIGH';
    if (value >= 60) return 'MEDIUM';
    if (value >= 40) return 'LOW';
    return 'CRITICAL';
  };

  return (
    <div className="confidence-meter">
      <div className="confidence-header">
        <span className="confidence-label">🎯 {label}</span>
        <span className={`confidence-value ${getConfidenceLevel(confidence).toLowerCase()}`}>
          {confidence}% - {getConfidenceLevel(confidence)}
        </span>
      </div>
      <div className="confidence-bar-container">
        <div 
          className="confidence-bar-fill"
          style={{
            width: `${confidence}%`,
            backgroundColor: getConfidenceColor(confidence),
            boxShadow: `0 0 10px ${getConfidenceColor(confidence)}`
          }}
        />
        <div className="confidence-bar-markers">
          {[25, 50, 75].map(marker => (
            <div 
              key={marker}
              className="confidence-marker"
              style={{ left: `${marker}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

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
          <label className="info-label" htmlFor="price-slider">
            Price: <span className="info-value">${price}</span>
          </label>
          <input
            id="price-slider"
            type="range"
            min={1}
            max={100}
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="slider"
            style={{ width: '100%' }}
          />
        </div>
        <div className="info-item slider-item">
          <label className="info-label" htmlFor="prod-slider">
            Production Units: <span className="info-value">{prodUnits}</span>
          </label>
          <input
            id="prod-slider"
            type="range"
            min={1}
            max={200}
            value={prodUnits}
            onChange={e => setProdUnits(Number(e.target.value))}
            className="slider"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentTurnDetails;
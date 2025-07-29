import React, { useState } from 'react';
import './GameControls.css';

interface ControlAction {
  id: string;
  label: string;
  icon: string;
  type: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const GameControls: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  // Add state for sliders
  const [price, setPrice] = useState(10);
  const [prodUnits, setProdUnits] = useState(50);

  const handleAction = async (actionId: string, actionName: string) => {
    setIsProcessing(actionId);
    console.log(`Action triggered: ${actionName}`);
    
    // Simulate action processing
    setTimeout(() => {
      setIsProcessing(null);
    }, 1500);
  };

  const mainActions: ControlAction[] = [
    { id: 'start-turn', label: 'Start Turn', icon: '▶️', type: 'primary' },
    { id: 'pause-game', label: 'Pause', icon: '⏸️', type: 'secondary' },
    { id: 'save-game', label: 'Save', icon: '💾', type: 'secondary' },
    { id: 'reset-game', label: 'Reset', icon: '🔄', type: 'danger' }
  ];

  const quickActions: ControlAction[] = [
    { id: 'auto-play', label: 'Auto Play', icon: '🤖', type: 'secondary' },
    { id: 'analyze', label: 'Analyze', icon: '🔍', type: 'secondary' }
  ];

  return (
    <div className="game-controls">
      {/* --- Add sliders at the top --- */}
      <div className="slider-controls">
        <div className="slider-group">
          <label htmlFor="price-slider" className="slider-label">
            Price: <span className="slider-value">${price}</span>
          </label>
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
        <div className="slider-group">
          <label htmlFor="prod-slider" className="slider-label">
            Production Units: <span className="slider-value">{prodUnits}</span>
          </label>
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
      {/* --- End sliders --- */}

      <div className="main-controls">
        {mainActions.map(action => (
          <button 
            key={action.id}
            className={`control-button ${action.type} ${isProcessing === action.id ? 'processing' : ''}`}
            onClick={() => handleAction(action.id, action.label)}
            disabled={isProcessing !== null}
          >
            {isProcessing === action.id ? (
              <>
                <div className="spinner-small"></div>
                Processing...
              </>
            ) : (
              <>
                <span className="button-icon">{action.icon}</span>
                {action.label}
              </>
            )}
          </button>
        ))}
      </div>
      
      <div className="control-section">
        <h4 className="section-title">Quick Actions</h4>
        <div className="quick-actions">
          {quickActions.map(action => (
            <button 
              key={action.id}
              className={`quick-action ${isProcessing === action.id ? 'processing' : ''}`}
              onClick={() => handleAction(action.id, action.label)}
              disabled={isProcessing !== null}
            >
              {isProcessing === action.id ? (
                <div className="spinner-small"></div>
              ) : (
                <span className="button-icon">{action.icon}</span>
              )}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameControls;

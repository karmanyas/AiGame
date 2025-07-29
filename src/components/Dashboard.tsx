import React, { Suspense, lazy, Component } from 'react';
import './Dashboard.css';

// Lazy load components with proper error handling
const CurrentTurnDetails = lazy(async () => {
  try {
    return await import('./CurrentTurnDetails');
  } catch {
    return { default: () => <div className="placeholder">CurrentTurnDetails component not found</div> };
  }
});

// Ensure correct file paths and extensions for dynamic imports
const GameStats = lazy(async () => {
  try {
    return await import('./GameStats'); // Make sure GameStats.tsx exists in the same directory
  } catch {
    return { default: () => <div className="placeholder">GameStats component not found</div> };
  }
});

const AgentList = lazy(async () => {
  try {
    return await import('./AgentList');
  } catch {
    return { default: () => <div className="placeholder">AgentList component not found</div> };
  }
});

const GameControls = lazy(async () => {
  try {
    return await import('./GameControls'); // Make sure GameControls.tsx exists in the same directory
  } catch {
    return { default: () => <div className="placeholder">GameControls component not found</div> };
  }
});

const DemandPredictionChart = lazy(async () => {
  try {
    return await import('./DemandPredictionChart');
  } catch {
    return { default: () => <div className="placeholder">DemandPredictionChart component not found</div> };
  }
});

// Simple Error Boundary inline
class ErrorBoundary extends Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-boundary">⚠️ Component failed to load</div>;
    }
    return this.props.children;
  }
}

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <span>Loading...</span>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Add a main heading at the top */}
      <header className="dashboard-main-header">
        <h1 className="main-title">BrewMasters CEO Challenge</h1>
        <div className="main-subtitle">
          <span role="img" aria-label="trophy">🏆</span>
          <span className="main-title-highlight">BrewMasters CEO Challenge</span>
        </div>
        <div className="main-desc">
          Outsmart the AI and Dominate the Market!
        </div>
        <div className="main-market-info">
          <span className="market-size">Market Size: <b>1,000 customers</b></span>
          <span className="competition-status">Competition: <b>Active</b></span>
        </div>
        <button className="terms-btn">📖 What Do These Terms Mean?</button>
      </header>
      
      <div className="control-panel-header">
        <h1 className="panel-title">🎮 BREWMASTERS CONTROL PANEL</h1>
        <div className="status-indicators">
          <div className="status-light active"></div>
          <span>SYSTEM ONLINE</span>
        </div>
      </div>
      
      <div className="control-grid">
        <div className="control-card primary-card">
          <div className="card-header">
            <h2>🎯 CURRENT MISSION</h2>
            <div className="card-status">ACTIVE</div>
          </div>
          <div className="card-content">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <CurrentTurnDetails />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        <div className="control-card secondary-card">
          <div className="card-header">
            <h2>📊 GAME STATS</h2>
          </div>
          <div className="card-content">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <GameStats />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        <div className="control-card secondary-card">
          <div className="card-header">
            <h2>📈 DEMAND FORECAST</h2>
          </div>
          <div className="card-content">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <DemandPredictionChart />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        <div className="control-card secondary-card">
          <div className="card-header">
            <h2>👥 AGENT STATUS</h2>
          </div>
          <div className="card-content">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <AgentList />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>

        <div className="control-card action-card">
          <div className="card-header">
            <h2>⚡ ACTIONS</h2>
          </div>
          <div className="card-content">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <GameControls />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
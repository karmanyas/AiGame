import React from 'react';
import './DemandPredictionChart.css';

// Example team data (replace with your actual data source)
const teams = [
  {
    name: 'Green Team',
    isUser: true,
    color: '#0a4',
    bg: 'rgba(0,128,64,0.9)',
    profit: 100925,
    profitChange: 235,
    profitChangePositive: true,
    inventory: 50,
    price: 8.2,
    demand: 604,
    sales: 150,
    production: 100,
    icon: '🧑‍💼',
  },
  {
    name: 'Blue Team',
    isUser: false,
    color: '#36f',
    bg: 'rgba(54,54,255,0.9)',
    profit: 100588.5,
    profitChange: -70.5,
    profitChangePositive: false,
    inventory: 275,
    price: 10.56,
    demand: 100,
    sales: 175,
    production: 350,
    icon: '🤖',
  }
];

const DemandPredictionChart: React.FC = () => {
  return (
    <div className="team-cards-container">
      {teams.map(team => (
        <div
          key={team.name}
          className={`team-card${team.isUser ? ' user-team' : ''}`}
          style={{
            borderColor: team.color,
            boxShadow: `0 0 24px 2px ${team.color}44`
          }}
        >
          <div className="team-card-header" style={{ background: team.isUser ? '#065c3c' : '#23234a' }}>
            <span className="team-icon">{team.icon}</span>
            <span className="team-name" style={{ color: team.isUser ? '#00ff88' : '#36f' }}>
              {team.name}
            </span>
            {team.isUser && <span className="team-badge">YOU</span>}
            <span
              className={`team-profit-change ${team.profitChangePositive ? 'positive' : 'negative'}`}
            >
              {team.profitChangePositive ? '↗' : '↘'} ${Math.abs(team.profitChange).toFixed(2)}
            </span>
          </div>
          <div className="team-card-body">
            <div className="team-profit">
              <span className="profit-label">Total Profit</span>
              <span className="profit-value">${team.profit.toLocaleString()}</span>
            </div>
            <div className="team-stats-grid">
              <div className="stat-block">
                <span className="stat-icon">📦</span>
                <span className="stat-label">Inventory</span>
                <span className="stat-value">{team.inventory} units</span>
              </div>
              <div className="stat-block">
                <span className="stat-icon">💲</span>
                <span className="stat-label">Price</span>
                <span className="stat-value">${team.price}</span>
              </div>
              <div className="stat-block">
                <span className="stat-icon">🎯</span>
                <span className="stat-label">Demand</span>
                <span className="stat-value">{team.demand}</span>
              </div>
              <div className="stat-block">
                <span className="stat-icon">🛒</span>
                <span className="stat-label">Sales</span>
                <span className="stat-value">{team.sales}</span>
              </div>
            </div>
            <div className="team-production">
              Production <span className="production-value">{team.production} units</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemandPredictionChart;

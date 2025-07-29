import React from 'react';
import './AgentList.css';

interface Agent {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'busy';
  lastAction: string;
  performance: number;
}

const AgentList: React.FC = () => {
  const agents: Agent[] = [
    { id: '1', name: 'AI Brewmaster', status: 'active', lastAction: 'Analyzing demand', performance: 92 },
    { id: '2', name: 'Market Analyst', status: 'busy', lastAction: 'Processing data', performance: 87 },
    { id: '3', name: 'Production Bot', status: 'idle', lastAction: 'Completed batch', performance: 95 }
  ];

  const getStatusColor = (status: Agent['status']): string => {
    switch (status) {
      case 'active': return '#00ff88';
      case 'busy': return '#ffa502';
      case 'idle': return '#cccccc';
      default: return '#ffffff';
    }
  };

  const getPerformanceColor = (performance: number): string => {
    if (performance >= 90) return '#00ff88';
    if (performance >= 70) return '#ffa502';
    return '#ff6b6b';
  };

  return (
    <div className="agent-list">
      {agents.map(agent => (
        <div key={agent.id} className="agent-item">
          <div className="agent-header">
            <span className="agent-name">{agent.name}</span>
            <div 
              className="agent-status"
              style={{ color: getStatusColor(agent.status) }}
            >
              <div 
                className="status-dot"
                style={{ backgroundColor: getStatusColor(agent.status) }}
              />
              {agent.status.toUpperCase()}
            </div>
          </div>
          
          <div className="agent-details">
            <div className="agent-action">
              <span className="action-label">Last Action:</span>
              <span className="action-value">{agent.lastAction}</span>
            </div>
            
            <div className="performance-bar">
              <span className="performance-label">Performance: {agent.performance}%</span>
              <div className="performance-track">
                <div 
                  className="performance-fill"
                  style={{ 
                    width: `${agent.performance}%`,
                    backgroundColor: getPerformanceColor(agent.performance)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgentList;

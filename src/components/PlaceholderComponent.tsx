import React from 'react';

interface PlaceholderComponentProps {
  componentName: string;
  description?: string;
}

const PlaceholderComponent: React.FC<PlaceholderComponentProps> = ({ 
  componentName, 
  description = "This component is not yet implemented." 
}) => {
  return (
    <div className="placeholder-component">
      <div className="placeholder-icon">🔧</div>
      <h3>{componentName}</h3>
      <p>{description}</p>
      <div className="placeholder-status">
        <span className="status-dot"></span>
        Coming Soon
      </div>
    </div>
  );
};

export default PlaceholderComponent;

import React from 'react';
import './Debug.css';

interface DebugProps {
  data: any;
  title?: string;
}

const Debug: React.FC<DebugProps> = ({ data, title }) => {
  return (
    <div className="debug-container">
      {title && <h3 className="debug-title">{title}</h3>}
      <pre className="debug-pre">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Debug;

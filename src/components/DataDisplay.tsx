import React from 'react';

interface DataProps {
  data: Record<string, any>; // Use a Record for key-value pairs
}

const DataDisplay: React.FC<DataProps> = ({ data }) => {
  const displayData = (value: any): string => {
    if (value === null || value === undefined) {
      return 'N/A';
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
      return JSON.stringify(value, null, 2);
    }
    return String(value);
  };

  return (
      <div>
        {Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <strong>{key}: </strong>
              <span>{displayData(value)}</span>
            </div>
        ))}
      </div>
  );
};

export default DataDisplay;

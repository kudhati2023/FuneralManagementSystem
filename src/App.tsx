import React from 'react';
import Debug from './components/Debug';
import ApiDataComponent from './components/ApiDataComponent';
import DataDisplay from './components/DataDisplay';

const App: React.FC = () => {
  const sampleData = {
    name: 'John Doe',
    age: 30,
    details: {
      email: 'john@example.com',
      address: '123 Main St'
    }
  };

  return (
      <div>
        <h1>Debug Example</h1>
        <Debug data={sampleData} title="User Data" />
        <h1>API Data</h1>
        <ApiDataComponent />
        <h1>Data Display</h1>
        <DataDisplay data={sampleData} />
      </div>
  );
};

export default App;
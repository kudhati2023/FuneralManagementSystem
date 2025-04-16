import React, { useState, useEffect } from 'react';

interface ApiData {
  id?: number;
  name?: string;
  // Add more properties as needed
}

const ApiDataComponent: React.FC = () => {
  const [data, setData] = useState<ApiData | null>(null); // State to hold fetched API data
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const [isLoading, setIsLoading] = useState<boolean>(false); // State to handle loading indicator

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true when fetching begins
      try {
        const response = await fetch('your-api-endpoint'); // Replace with your actual API endpoint
        if (!response.ok) {
          // Handle non-successful HTTP responses
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData: ApiData = await response.json(); // Parse JSON data
        setData(jsonData); // Update the state with the fetched data
      } catch (err) {
        // Handle errors while fetching data
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setIsLoading(false); // Stop loading indicator once fetching finishes
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    // Show loading message while fetching
    return <div>Loading...</div>;
  }

  if (error) {
    // Show error message if there was an error
    return <div>Error: {error}</div>;
  }

  if (!data) {
    // Handle case where no data is returned
    return <div>No data available</div>;
  }

  // Render fetched data
  return (
      <div>
        <h2>ID: {data.id || 'No ID available'}</h2>
        <h2>Name: {data.name || 'No name available'}</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
  );
};

export default ApiDataComponent;
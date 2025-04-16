import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

interface UseApiDataResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApiData<T>(
  fetchFunction: () => Promise<T>
): UseApiDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction();
        setData(response);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
}
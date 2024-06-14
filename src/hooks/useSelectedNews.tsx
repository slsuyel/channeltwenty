import { useEffect, useState } from 'react';
import { callApi } from '../utils/functions';

const useSelectedNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchLatestNews = async () => {
      setIsLoading(true);
      try {
        const response = await callApi(
          'GET',
          `/api/frontend/selected-articles`
        );
        setLatestNews(response.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchLatestNews();
  }, []);

  return { latestNews, isLoading, isError };
};

export default useSelectedNews;

import { useEffect, useState } from 'react';

const useInfiniteScroll = (callback, buffer = 300) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isFetching) return;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - buffer) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching, buffer]);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      setIsFetching(false);
    });
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;

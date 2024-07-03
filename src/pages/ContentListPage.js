import React, { useState, useEffect, useContext, Suspense, useMemo, useRef } from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import NoRecords from '../components/NoRecords';
import { DataContext } from '../context/DataContext';
import { fetchData } from '../api/fetchData';
import { debounce } from '../utils/debounce';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const GridList = React.lazy(() => import('../components/GridList'));

const ContentListPage = () => {
  const [page, setPage] = useState(1);
  const { data, setData } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const searchInputRef = useRef(null);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const loadMoreData = async (done) => {
    if (data.length >= totalItems) {
      done();
      return;
    }
    try {
      const response = await fetchData(page + 1);
      setPage((prevPage) => prevPage + 1);
      const newData = response.contentItems.content;
      setData((prevData) => [...prevData, ...newData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    done();
  };

  const [isFetching] = useInfiniteScroll(loadMoreData);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchData(1);
        setTotalItems(response.totalContentItems); // Update total items
        const newData = response.contentItems.content;
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    loadData();
  }, [setData]);

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return data;
    } else {
      return data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  }, [data, searchTerm]);

  const handleSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
  }, 300);

  const handleSearchIconClick = () => {
    setIsSearchBarVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const intervalId = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(intervalId);
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    }, 50);
  };

  const handleBackButtonClick = () => {
    setSearchTerm('');
    setIsSearchBarVisible(false);
    searchInputRef.current.value = ''; // Clear the search input
  };

  useEffect(() => {
    if (isSearchBarVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchBarVisible]);

  return (
    <div>
      <Header
        onSearchIconClick={handleSearchIconClick}
        onBackButtonClick={handleBackButtonClick}
        showBackButton={isSearchBarVisible} // Show back button only if search bar is visible
      />
      {isSearchBarVisible && <SearchBar ref={searchInputRef} onSearch={handleSearch} />}
      <Suspense fallback={<div>Loading...</div>}>
        {filteredData.length > 0 ? (
          <GridList data={filteredData} searchTerm={searchTerm} />
        ) : (
          <NoRecords />
        )}
      </Suspense>
      {isFetching && <p>Loading more items...</p>}
    </div>
  );
};

export default ContentListPage;

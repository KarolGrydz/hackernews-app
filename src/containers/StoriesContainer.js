import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { createLocalStorage } from '../localStorage';
import { Spinner } from '../components/Spinner';

export const StoriesContainer = ({ data }) => {
  const { title, fetchURL } = data;
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  const storage = createLocalStorage();
  console.log(count);
  useEffect(() => {
    if (title === 'Favorite') {
      setStoryIds(
        Object.keys(storage).filter(item => (parseInt(item, 10) ? item : null))
      );
    } else {
      getStoryIds(fetchURL).then(data => setStoryIds(data));
    }
  }, []);
  return (
    <>
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker {title} Stories</h1>
        {console.log(storyIds.length)}
        {storyIds.length === 0 ? (
          <Spinner />
        ) : (
          storyIds
            .slice(0, count)
            .map(storyId => <Story key={storyId} storyId={storyId} />)
        )}
      </StoriesContainerWrapper>
    </>
  );
};

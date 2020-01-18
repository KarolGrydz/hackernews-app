import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const location = useLocation();
  const { title, fetchURL } = location.state;
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  console.log(count);
  useEffect(() => {
    getStoryIds(fetchURL).then(data => setStoryIds(data));
  }, [fetchURL]);
  return (
    <>
      <StoriesContainerWrapper data-test-id='stories-container'>
        <h1>Hacker {title} Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};

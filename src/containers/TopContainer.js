import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const TopContainer = ({ fetchURL }) => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  useEffect(() => {
    getStoryIds(fetchURL).then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <StoriesContainerWrapper data-test-id='stories-container'>
        <h1>Hacker Top Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};

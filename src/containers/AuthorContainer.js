import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStoryIds } from '../services/hnApi';

export const AuthorContainer = () => {
  const { author } = useParams();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds(fetchURL).then(data => setStoryIds(data));
  }, []);

  return (
    <div>
      <h1>{author} Stories</h1>
      {storyIds.map(story => (
        <Spinner />
      ))}
    </div>
  );
};

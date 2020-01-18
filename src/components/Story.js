import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';
import { mapTime } from '../mappers/mapTime';
import { createLocalStorage } from '../localStorage';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from '../styles/StoryStyles';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  const [fav, setFav] = useState(false);
  const storage = createLocalStorage();
  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
    Object.values(storage).filter(item => {
      if (item == storyId) {
        setFav(true);
      }
    });
  }, [storyId]);

  const toggleFav = () => {
    setFav(!fav);
  };

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By: </StoryMetaElement>
          {story.by}
        </span>
      </StoryMeta>
      <StoryMeta>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted: </StoryMetaElement> {` `}
          {mapTime(story.time)} ago
        </span>
      </StoryMeta>
      <StoryMeta>
        <span data-testid="story-score">
          <StoryMetaElement color="#000">Score: </StoryMetaElement> {` `}
          {story.score}
        </span>
      </StoryMeta>
      <StoryMeta>
        {fav ? (
          <FaHeart
            onClick={() => (toggleFav(), storage.removeItem(storyId))}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <FaRegHeart
            onClick={() => (toggleFav(), storage.setItem(storyId, storyId))}
            style={{ cursor: 'pointer' }}
          />
        )}
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

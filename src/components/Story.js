import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { getStory } from '../services/hnApi';
import { mapTime } from '../mappers/mapTime';
import { createLocalStorage } from '../localStorage';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
  StoryButton
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
  }, [fav]);

  const toggleFav = () => {
    setFav(!fav);
  };

  return story && story.url ? (
    <>
      <StoryWrapper data-testid='story'>
        <div>
          <StoryTitle>
            <a href={story.url}>{story.title}</a>
          </StoryTitle>
          <div style={{ display: 'inline-flex' }}>
            <StoryMeta>
              <span data-testid='story-by'>
                <StoryMetaElement color='#000'></StoryMetaElement>
                <Link to={`/${story.by}`}>{story.by}</Link>
                {` `}
                <GoPrimitiveDot />
              </span>
            </StoryMeta>
            <StoryMeta>
              <span data-testid='story-time'>
                <StoryMetaElement color='#000'></StoryMetaElement> {` `}
                {mapTime(story.time)} ago
              </span>
            </StoryMeta>
          </div>
          <StoryMeta>
            <span data-testid='story-score'>
              <StoryMetaElement color='#000'>Score: </StoryMetaElement> {` `}
              {story.score}
            </span>
          </StoryMeta>
          <StoryMeta>
            {fav ? (
              <StoryButton
                onClick={() => (toggleFav(), storage.removeItem(storyId))}
              >
                <FaHeart />
                Remove
              </StoryButton>
            ) : (
              <StoryButton
                onClick={() => (toggleFav(), storage.setItem(storyId, storyId))}
              >
                <FaRegHeart /> Add
              </StoryButton>
            )}
          </StoryMeta>
        </div>
        <a href={story.url} style={{ margin: 'auto' }}>
          <img
            src={`https://i.picsum.photos/id/${Math.floor(
              Math.random() * 1000
            )}/100/100.jpg`}
          ></img>
        </a>
      </StoryWrapper>
    </>
  ) : null;
};

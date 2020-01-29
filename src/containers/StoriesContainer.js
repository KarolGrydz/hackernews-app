import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { getStoryIds, getAuthorIds } from '../services/hnApi';
import { Story } from '../components/Story';
import {
  StoriesContainerWrapper,
  AuthorMeta,
  AuthorMetaElement,
  IconTitle,
  StoriesContainerTitle
} from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { createLocalStorage } from '../localStorage';
import { Spinner } from '../components/Spinner';
import { mapTime } from '../mappers/mapTime';

export const StoriesContainer = ({ data }) => {
  const { author } = useParams();
  const { title, fetchURL } = data;
  const [storyIds, setStoryIds] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const { count } = useInfiniteScroll();
  const storage = createLocalStorage();
  useEffect(() => {
    switch (title) {
      case 'Favorite':
        favoriteCase();
        break;
      case 'Author':
        authorCase();
        break;
      default:
        defaultCase();
        break;
    }
  }, []);

  const favoriteCase = () => {
    setStoryIds(
      Object.keys(storage).filter(item => (parseInt(item, 10) ? item : null))
    );
  };
  const authorCase = () => {
    getAuthorIds(author).then(data => {
      setAuthorData(data);
      setStoryIds(data.submitted);
    });
  };
  const defaultCase = () => {
    getStoryIds(fetchURL).then(data => setStoryIds(data));
  };

  return (
    <>
      <StoriesContainerWrapper data-test-id='stories-container'>
        {title === 'Author' ? (
          <>
            <div style={{ display: 'inline-flex' }}>
              <IconTitle backgroundColor='#1e8e3e'>
                <data.icon />
              </IconTitle>
              <StoriesContainerTitle>{author} Profile</StoriesContainerTitle>
            </div>
            <AuthorMeta>
              <p>
                <span>Age: </span>
                <AuthorMetaElement>
                  {mapTime(authorData.created)}
                </AuthorMetaElement>
              </p>
            </AuthorMeta>
            <AuthorMeta>
              <p>
                <span>Description: </span>
                <AuthorMetaElement>
                  {authorData.about ? authorData.about : 'No description'}
                </AuthorMetaElement>
              </p>
            </AuthorMeta>
            <AuthorMeta>
              <p>
                <span>Popularity: </span>
                <AuthorMetaElement>
                  {authorData.karma} <AiFillLike />
                </AuthorMetaElement>
              </p>
            </AuthorMeta>
          </>
        ) : (
          <div style={{ display: 'inline-flex' }}>
            <IconTitle
              backgroundColor={
                title === 'Top'
                  ? '#1e8e3e'
                  : title === 'Jobs'
                  ? '#fa7b17'
                  : null
              }
            >
              <data.icon />
            </IconTitle>
            <StoriesContainerTitle>
              Hacker {title} Stories
            </StoriesContainerTitle>
          </div>
        )}
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

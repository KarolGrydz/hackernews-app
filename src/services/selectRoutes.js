import {
  newStoriesURL,
  topStoriesURL,
  bestStoriesURL,
  jobsStoriesURL,
  authorURL
} from './URL';

export const seletRoutes = fetchURL => {
  const actionMap = {
    NEWS: newStoriesURL,
    TOP: topStoriesURL,
    BEST: bestStoriesURL,
    JOBS: jobsStoriesURL,
    AUTHOR: authorURL
  };

  if (actionMap[fetchURL]) return actionMap[fetchURL];

  return false;
};

import {
  newStoriesURL,
  topStoriesURL,
  bestStoriesURL,
  jobsStoriesURL
} from './URL';

export const selectFetch = fetchURL => {
  const actionMap = {
    NEWS: newStoriesURL,
    TOP: topStoriesURL,
    BEST: bestStoriesURL,
    JOBS: jobsStoriesURL
  };

  if (actionMap[fetchURL]) return actionMap[fetchURL];

  return false;
};

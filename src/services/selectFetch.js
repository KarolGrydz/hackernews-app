import { newStoriesURL, topStoriesURL } from './URL';

export const selectFetch = fetchURL => {
  const actionMap = {
    NEWS: newStoriesURL,
    TOP: topStoriesURL,
    BEST: 'BEST',
    JOBS: 'JOBS'
  };

  if (actionMap[fetchURL]) return actionMap[fetchURL];

  return false;
};

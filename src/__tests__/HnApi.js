import axios from 'axios';
import {
  getStoryIds,
  getStory,
  newStoriesURL,
  storyURL
} from '../services/hnApi';
import { singularStory, emptySingularStory, storyIds } from '../fixtures';

jest.mock('axios');

describe('HackerNews API', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getStory funcionality', () => {
    it('requests and gets story from HackerNews API', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singularStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyURL + 1}.json`);
      expect(entity).toEqual(singularStory);
    });

    it('does not retirve a story from API, but handles gracefully', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyURL + 1}.json`);
      expect(entity).toEqual(emptySingularStory);
    });
  });
  describe('getStoryIds funcionality', () => {
    it('requests and gets story ids from HackerNews API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(newStoriesURL);
      expect(entity).toEqual(storyIds);
    });
  });
});

import axios from 'axios';
import { storyURL } from './URL';
import { selectFetch } from './selectFetch';
import { selectFields } from './selecdFields';

export const getStory = async storyId => {
  try {
    const result = await axios
      .get(`${storyURL + storyId}.json`)
      .then(({ data }) => data && selectFields(data));
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getStoryIds = async fetchURL => {
  const targetURL = selectFetch(fetchURL);
  try {
    const result = await axios.get(targetURL).then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

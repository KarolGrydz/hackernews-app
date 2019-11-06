import axios from 'axios';
import { selectFields } from './selecdFields';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}/item/`;

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

export const getStoryIds = async () => {
  try {
    const result = await axios.get(newStoriesURL).then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

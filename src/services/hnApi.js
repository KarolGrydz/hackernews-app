import axios from 'axios';
import { storyURL } from './URL';
import { seletRoutes } from './selectRoutes';
import { selectFields } from './selecdFields';
import { authorFields } from './authorFields';

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
  const targetURL = seletRoutes(fetchURL);
  try {
    const result = await axios.get(targetURL).then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAuthor = async authorId => {
  try {
    const result = await axios.get(`${storyURL}`);
  } catch (error) {
    console.log(error);
  }
};

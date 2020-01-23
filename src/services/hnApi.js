import axios from 'axios';
import { storyURL, authorURL } from './URL';
import { seletRoutes } from './selectRoutes';
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
  const targetURL = seletRoutes(fetchURL);
  try {
    const result = await axios.get(targetURL).then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAuthorIds = async fetchURL => {
  try {
    const result = await axios
      .get(`${authorURL + fetchURL}.json`)
      .then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};

import axios from 'axios';

export default baseURL = 'https://hacker-news.firebaseio.com/v0/';
export default newStoriesURL = `${baseURL}newstories`;
export default storyURL = `${baseURL}/item`;

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesURL).then(data => data);

  return result;
}
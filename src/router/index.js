import { StoriesContainer } from '../containers/StoriesContainer';
export const routes = [
  {
    pathname: '/',
    component: StoriesContainer,
    state: {
      id: 1,
      title: 'News',
      fetchURL: 'NEWS'
    }
  },
  {
    pathname: '/top',
    component: StoriesContainer,
    state: {
      id: 2,
      title: 'Top',
      fetchURL: 'TOP'
    }
  },
  {
    pathname: '/best',
    component: StoriesContainer,
    state: {
      id: 3,
      title: 'Best',
      fetchURL: 'BEST'
    }
  },
  {
    pathname: '/jobs',
    component: StoriesContainer,
    state: {
      id: 4,
      title: 'Jobs',
      fetchURL: 'JOBS'
    }
  },
  {
    pathname: '/favorite',
    component: StoriesContainer,
    state: {
      id: 5,
      title: 'Favorite',
      fetchURL: null
    }
  },
  {
    pathname: '/:author',
    component: StoriesContainer,
    state: {
      id: 6,
      title: 'Author',
      fetchURL: null
    }
  }
];

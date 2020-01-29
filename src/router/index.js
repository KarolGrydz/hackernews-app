import { StoriesContainer } from '../containers/StoriesContainer';
import { FaNewspaper } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { MdWork, MdFavorite, MdPersonOutline } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
export const routes = [
  {
    pathname: '/',
    component: StoriesContainer,
    state: {
      id: 1,
      title: 'News',
      fetchURL: 'NEWS',
      icon: FaNewspaper
    }
  },
  {
    pathname: '/top',
    component: StoriesContainer,
    state: {
      id: 2,
      title: 'Top',
      fetchURL: 'TOP',
      icon: FiTrendingUp
    }
  },
  {
    pathname: '/best',
    component: StoriesContainer,
    state: {
      id: 3,
      title: 'Best',
      fetchURL: 'BEST',
      icon: GiNetworkBars
    }
  },
  {
    pathname: '/jobs',
    component: StoriesContainer,
    state: {
      id: 4,
      title: 'Jobs',
      fetchURL: 'JOBS',
      icon: MdWork
    }
  },
  {
    pathname: '/favorite',
    component: StoriesContainer,
    state: {
      id: 5,
      title: 'Favorite',
      fetchURL: null,
      icon: MdFavorite
    }
  },
  {
    pathname: '/:author',
    component: StoriesContainer,
    state: {
      id: 6,
      title: 'Author',
      fetchURL: null,
      icon: MdPersonOutline
    }
  }
];

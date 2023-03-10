import { useQuery } from 'react-query';
import { axios } from 'lib/axios';
import { Post } from '../types';

const fakePosts: Post[] = [
  {
    id: 'abc',
    poster: 'Jay Scott',
    name: 'Primordial Forest',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '123',
    poster: 'Adam Larson',
    name: 'Bamboo River',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '145',
    poster: 'Tom Renner',
    name: 'Social Media App',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '990',
    poster: 'Owen Teller',
    name: 'Midnight in Prague',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '930',
    poster: 'Evan Gill',
    name: 'Raging Fire',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '932',
    poster: 'Jane Parker',
    name: 'Leaves In The Wind',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '9399',
    poster: 'Emma Jensen',
    name: 'Bend In The Path',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '93993',
    poster: 'Jason Roberts',
    name: 'Floating Lights',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '93923',
    poster: 'Liam James',
    name: 'Out In The Distance',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '2342',
    poster: 'Joel Parsons',
    name: 'Brochure Template',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '98766',
    poster: 'Sarah Goetz',
    name: 'Blinding Light',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '887655',
    poster: 'Scott Olsen',
    name: 'Rain',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '338474',
    poster: 'Brianna Smith',
    name: 'Looking Back',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '9399',
    poster: 'Mark Wyatt',
    name: 'AI art site',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '939090',
    poster: 'Mary Jameson',
    name: 'The Wild',
    likes: 16,
    imgLink: '/abc',
  },
  {
    id: '00001',
    poster: 'Pete Thompson',
    name: 'Neon and Silk',
    likes: 16,
    imgLink: '/abc',
  },
];

export const getPosts = async (search: any): Promise<Post[]> => {
  // return axios.get(`/posts`);
  console.log('axios search : ', search.get('sortby'));
  const res = await axios.get('/', { withCredentials: true });
  console.log('res ', res);
  console.log('getting post from useposts...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakePosts);
    }, 3000);
  });
};

export const usePosts = (search: any) => {
  console.log('search from get posts : ', search);
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(search),
  });
};

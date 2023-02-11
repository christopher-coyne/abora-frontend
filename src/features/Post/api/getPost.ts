import { useQuery } from 'react-query';
import { axios } from 'lib/axios';
import { Post } from '../types';

const fakePost: Post = {
  id: 'abc',
  poster: 'Jay Scott',
  name: 'Primordial Forest',
  likes: 16,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer efficitur efficitur ex, eu blandit massa convallis eu. Aenean mollis lorem ut ex tincidunt, id bibendum elit euismod. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent fringilla magna sit amet sem pharetra, et luctus libero rutrum.',
  prompt: 'person walking very quickly, snow, beautiful, terrain, night time, idyllic',
  datePosted: 'November 15, 2022',
  imgLinks: ['/abc'],
  engine: 'Midjourney',
  media: 'Digital Art',
  type: 'img',
};

export const getPost = (): Promise<Post> => {
  // return axios.get(`/posts`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakePost);
    }, 3000);
  });
};

export const usePost = () => {
  return useQuery({
    queryKey: ['post'],
    queryFn: () => getPost(),
  });
};

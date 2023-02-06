import { Navbar } from 'components/layout/navbar/Navbar';
import { Post } from '../types';
import { PostCard } from '../components/PostCard/PostCard';
import { PostGrid } from './styles';

export function Posts() {
  const login = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };
  const fakePosts: Post[] = [
    {
      id: 'abc',
      poster: 'Jay Scott',
      name: 'Primordial Forest',
      likes: 16,
    },
    {
      id: '123',
      poster: 'Adam Larson',
      name: 'Bamboo River',
      likes: 16,
    },
    {
      id: '145',
      poster: 'Tom Renner',
      name: 'Social Media App',
      likes: 16,
    },
    {
      id: '990',
      poster: 'Owen Teller',
      name: 'Midnight in Prague',
      likes: 16,
    },
    {
      id: '930',
      poster: 'Evan Gill',
      name: 'Raging Fire',
      likes: 16,
    },
    {
      id: '932',
      poster: 'Jane Parker',
      name: 'Leaves In The Wind',
      likes: 16,
    },
    {
      id: '9399',
      poster: 'Emma Jensen',
      name: 'Bend In The Path',
      likes: 16,
    },
    {
      id: '93993',
      poster: 'Jason Roberts',
      name: 'Floating Lights',
      likes: 16,
    },
    {
      id: '93923',
      poster: 'Liam James',
      name: 'Out In The Distance',
      likes: 16,
    },
  ];
  return (
    <div>
      <Navbar />
      <PostGrid>
        {fakePosts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </PostGrid>
      Landing
      <button onClick={() => login()}>Login</button>
    </div>
  );
}

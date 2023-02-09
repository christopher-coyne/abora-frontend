import { Post } from '../types';
import { PostCard } from '../components/PostCard/PostCard';
import { PostGrid } from './styles';
import { usePosts } from '../api/getPosts';
import MainLayout from 'components/Layout/MainLayout/MainLayout';

export function Posts() {
  const login = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };

  const { isLoading, data } = usePosts();
  return (
    <MainLayout>
      {!!data && (
        <PostGrid>
          {data.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </PostGrid>
      )}
      Landing
      <button onClick={() => login()}>Login</button>
    </MainLayout>
  );
}

import { Loading } from 'components/Primitives/Loading';
import { PostCard } from '../components/PostCard/PostCard';
import { Filters } from '../components/Filters/Filters';
import { PostGrid } from './styles';
import { usePosts } from '../api/getPosts';
import MainLayout from 'components/Layout/MainLayout/MainLayout';
import SearchBar from '../components/Searchbar/SearchBar';

export function Posts() {
  const login = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };

  const { data } = usePosts();
  return (
    <MainLayout>
      <SearchBar />
      <Filters />
      {data ? (
        <PostGrid>
          {data.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </PostGrid>
      ) : (
        <Loading />
      )}
      Landing
      <button onClick={() => login()}>Login</button>
    </MainLayout>
  );
}

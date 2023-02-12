import { Loading } from 'components/Primitives/Loading';
import { PostCard } from '../components/PostCard/PostCard';
import { Filters } from '../components/Filters/Filters';
import { PostGrid } from './styles';
import { usePosts } from '../api/getPosts';
import { useSearchParams } from 'react-router-dom';
import MainLayout from 'components/Layout/MainLayout/MainLayout';
import SearchBar from '../components/Searchbar/SearchBar';
import { useEffect } from 'react';

export function Posts() {
  const [search, setSearch] = useSearchParams();

  const login = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };

  const { data, refetch } = usePosts();
  useEffect(() => {
    console.log('searching...');
    refetch();
  }, [search]);

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

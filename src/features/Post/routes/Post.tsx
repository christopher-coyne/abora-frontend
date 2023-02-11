import { Loading } from 'components/Primitives/Loading';
import { usePost } from '../api/getPost';
import MainLayout from 'components/Layout/MainLayout/MainLayout';
import { TitleContainer, SubScript, PostedInfo, Likes, Description } from './styles';

export function Post() {
  const { isLoading, data } = usePost();

  if (!data) {
    return (
      <MainLayout>
        <Loading />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <TitleContainer>
        {data.name}{' '}
        <ul>
          <li>{data.engine}</li>
          <li>{data.media}</li>
        </ul>
      </TitleContainer>
      {data.type === 'img' && data.imgLinks ? (
        <ul>
          {data.imgLinks.map((link) => (
            <li key={link}>link: {link}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <SubScript>
        <PostedInfo>May 2022 - Michael James</PostedInfo>
        <Likes>16 Likes</Likes>
      </SubScript>
      <Description>{data.description}</Description>
    </MainLayout>
  );
}

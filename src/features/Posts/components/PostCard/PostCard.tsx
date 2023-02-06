import { Post } from 'features/Posts/types';
import { Card, Thumbnail, Title, TitleContainer, Likes, Poster } from './styles';

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <Card>
      <Thumbnail />
      <TitleContainer>
        <Title>{post.name}</Title>
        <Likes>{post.likes}</Likes>
      </TitleContainer>
      <Poster>{post.poster}</Poster>
    </Card>
  );
}

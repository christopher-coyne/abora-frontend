import { Post } from 'features/Posts/types';
import { Card, Thumbnail, Title, TitleContainer, Likes, Poster } from './styles';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

type Props = {
  post: Post;
};
/* <i class="fa-regular fa-thumbs-up"></i> */
export function PostCard({ post }: Props) {
  return (
    <Card>
      <Link to={`post/${post.id}`}>
        <Thumbnail />
        <TitleContainer>
          <Title>{post.name}</Title>
          <Likes>
            {post.likes} <FontAwesomeIcon icon={faThumbsUp} />
          </Likes>
        </TitleContainer>
        <Poster>{post.poster}</Poster>
      </Link>
    </Card>
  );
}

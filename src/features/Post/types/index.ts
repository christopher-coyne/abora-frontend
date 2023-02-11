export type Post = {
  poster: string;
  likes: number;
  name: string;
  id: string;
  description: string;
  engine: string;
  media: string;
  prompt: string;
  type: 'img' | 'text';
  imgLinks?: string[];
  text?: string;
  datePosted: string;
};

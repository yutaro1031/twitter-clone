export interface Timeline {
  tweets: {
    user: User;
    tweet: Tweet;
  }[];
}

interface Tweet {
  detail: string;
  time: string;
  retweets: number;
  likes: number;
  comments: number;
}

interface User {
  id: string;
  name: string;
  image: string;
}

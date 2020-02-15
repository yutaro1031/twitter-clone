import axios from 'axios';
import { Response } from '../Types/Domain';

export const getTweets = () => {
  return axios.get<Response.GetTweets>('https://demo6801336.mockable.io/timeline');
};

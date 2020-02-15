import { Timeline as TL } from './types';
export namespace Domain {
  export type Timeline = TL;
}

export namespace Response {
  export type GetTweets = Domain.Timeline;
}

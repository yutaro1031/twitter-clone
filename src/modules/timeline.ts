import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { Timeline as State } from '../Types/types';
import { Domain } from '../Types/Domain';
import { RootState } from '.';
import { getTweets } from '../client';

const GET_TWEETS_START = 'GET_TWEETS_START';
const GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS';
const GET_TWEETS_FAILED = 'GET_TWEETS_FAILED';

const hoge: typeof GET_TWEETS_SUCCESS = 'hoge';

interface GetTweetsStart extends Action {
  type: typeof GET_TWEETS_START;
}
const getTweetsStart = (): GetTweetsStart => ({
  type: GET_TWEETS_START
});

interface GetTweetsFailed extends Action {
  type: typeof GET_TWEETS_FAILED;
}
const getTweetsFailed = (): GetTweetsFailed => ({
  type: GET_TWEETS_FAILED
});

interface GetTweetsSuccess extends Action {
  type: typeof GET_TWEETS_SUCCESS;
  payload: Domain.Timeline;
}
const getTweetsSuccess = (payload: Domain.Timeline): GetTweetsSuccess => ({
  type: GET_TWEETS_SUCCESS,
  payload
});

const initialState: State = {
  tweets: []
};

export function getTweetsAction(): ThunkAction<void, RootState, undefined, Action> {
  return async dispatch => {
    dispatch(getTweetsStart());
    try {
      const res = await getTweets();
      dispatch(getTweetsSuccess(res.data));
    } catch (e) {
      dispatch(getTweetsFailed());
    }
  };
}

type TimelineAction = GetTweetsStart | GetTweetsSuccess | GetTweetsFailed;

export const timelineReducer = (state: State = initialState, action: TimelineAction) => {
  switch (action.type) {
    case GET_TWEETS:
      // return Object.assign({}, state, {
      //   tweets: action.payload
      // });
      return state;
    default:
      return state;
  }
};

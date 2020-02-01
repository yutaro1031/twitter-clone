import { Action } from 'redux';

import { Timeline as State } from '../types';

const GET_TWEETS = 'GETTWEETS';

const initialState: State = {
  tweets: []
};

interface GetTweetsAction extends Action {
  type: typeof GET_TWEETS;
}

export const getTweets = (): GetTweetsAction => ({
  type: GET_TWEETS
});

export const timelineReducer = (state: State = initialState, action: GetTweetsAction) => {
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

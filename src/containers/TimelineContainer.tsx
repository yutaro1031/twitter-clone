import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Timeline from '../components/Timeline';
import { getTweets } from '../modules/timeline';
import { RootState } from '../modules';

const mapStateToProps = (state: RootState) => {
  return {
    // tweets: state.timeline.tweets
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getTweets: () => dispatch(getTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);

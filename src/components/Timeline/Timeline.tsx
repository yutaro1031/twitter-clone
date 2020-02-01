import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Timeline as TimelineType } from '../../Types/types';
import { getTweets } from '../../modules/timeline';

interface Props {
  getTweets: typeof getTweets;
  // tweets: TimelineType;
}

const Timeline: React.FC<Props> = ({ getTweets }) => {
  // componentDidMount() {
  //   axios
  //     .get<TimelineType>('https://demo6801336.mockable.io/timeline')
  //     .then(res => this.setState({ timeline: res.data }))
  //     .catch(err => console.log(err));
  // }

  return (
    <div>
      hgoehgoehg
      <div>hoge</div>
    </div>
  );
};

export { Timeline };

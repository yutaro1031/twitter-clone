import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Timeline } from '../types';

interface Props {}
interface State {
  timeline: Timeline;
}

class Header extends React.Component<Props, State> {
  componentDidMount() {
    axios
      .get<Timeline>('https://demo6801336.mockable.io/timeline')
      .then(res => this.setState({ timeline: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        hgoehgoehg
        <div>hoge</div>
      </div>
    );
  }
}

export default Header;

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './modules/index';

import { Header } from './components/Header';
import TimelineContainer from './containers/TimelineContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <TimelineContainer />
    </Provider>
  );
};

export default App;

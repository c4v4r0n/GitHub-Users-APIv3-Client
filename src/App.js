import React from 'react';
import { Provider } from 'react-redux'

import GlobalStyle from './style'
import Header from './components/header'
import store from './store'
import MainBody from './components/main'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainBody />
      <GlobalStyle />
    </Provider>
  );
}

export default App;

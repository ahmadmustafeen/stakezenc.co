import React, {useEffect} from 'react';

import RNBootSplash from 'react-native-bootsplash';
import MyProvider from './context/contextProvider';
import Navigator from './navigation';

const Wrapper = () => {
  return (
    <MyProvider>
      <App />
    </MyProvider>
  );
};

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 1000});
  }, []);
  return (
    // <MyProvider>
    <Navigator />
    // </MyProvider>
  );
};

export default Wrapper;

import {StatusBar} from 'react-native';
import React from 'react';
import Navigation from './navigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import ColorConstants from '../assets/colorConstants';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        backgroundColor={ColorConstants.mainBgColor}
        translucent={false}
      />
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;

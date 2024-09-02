import * as React from 'react';
import { useAuth } from '../../context';
import { LoadingScreen } from '@components';
import BottomTabNavigation from '../bottomTab';
import { LoginScreen } from '@screens';

const App = () => {
  const { currentUser, initializing, loading } = useAuth();

  // if (initializing || loading) return <LoadingScreen description='Login please wait...' />
  // if (currentUser) return <BottomTabNavigation />
  // return <LoginScreen />

  return (
    <>
      {false ? <BottomTabNavigation /> : <LoginScreen />}
    </>
  );
};

export default App;

import * as React from 'react';
import { LoginScreen } from '@screens';
import { useAuth } from '../../context';
import { LoadingScreen } from '@components';
import BottomTabNavigation from '../bottomTab';




const App = () => {
  const { currentUser, initializing, loading } = useAuth();

  if (initializing || loading) return <LoadingScreen description='Login please wait...' />
  // if (currentUser) return <BottomTabNavigation />
  // return <LoginScreen />

  return (
    <>
      {currentUser ? <BottomTabNavigation /> : <LoginScreen />}
    </>
  );
};

export default App;

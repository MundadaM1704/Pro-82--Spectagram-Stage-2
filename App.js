import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import Feed from './screens/Feed';
import CreatePost from './screens/CreatePost';
import Profile from './screens/Profile';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

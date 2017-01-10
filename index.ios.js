// Import React
import React from 'react';
import { AppRegistry, View } from 'react-native';

// Import components
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1}}>
      <Header headerText={'Testing Yo'} />
      <AlbumList />
    </View>
  );

// Render the component to the device
// First argument is app name (must match project name)
// Second argument is the first component to render
AppRegistry.registerComponent('albums', () => App);

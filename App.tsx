import React from 'react';
import Home from './src/views/Home';
import List from './src/views/List';
import {Provider} from 'react-redux';
import Tasks from './src/views/Tasks';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './src/interfaces/navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Tasks" component={Tasks} />
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

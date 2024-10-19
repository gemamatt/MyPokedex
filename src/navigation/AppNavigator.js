import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail';
import translations from '../services/translations';

const Stack = createNativeStackNavigator();

const AppNavigator = ({ lang, toggleLanguage }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          options={{ headerShown: false }} 
        >
          {(props) => (
            <Home 
              {...props} 
              lang={lang} 
              toggleLanguage={toggleLanguage} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="PokemonList" 
          options={{ headerShown: false }} 
        >
          {(props) => (
            <PokemonList 
              {...props} 
              lang={lang} 
              toggleLanguage={toggleLanguage} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="PokemonDetail" 
          options={{ 
            title: '' 
          }}
        >
          {(props) => (
            <PokemonDetail 
              {...props} 
              lang={lang} 
              toggleLanguage={toggleLanguage} 
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

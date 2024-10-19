import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './src/components/Header'; 
import Navigation from './src/navigation/AppNavigator';
import styles from './src/styles/AppStyles';
import translations from './src/services/translations';

export default function App() {
  const [lang, setLang] = useState('es');

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <View style={styles.container}>
      <Header 
        title={translations[lang].appTitle}
        toggleLanguage={toggleLanguage} 
        lang={lang} 
      />
      <Navigation lang={lang} toggleLanguage={toggleLanguage} />
      <StatusBar style="auto" />
    </View>
  );
}

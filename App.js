import React from 'react';
import { View } from 'react-native';

import { Header } from './src/components/Header/Header';
import { RenderList , maxPeoples} from './src/components/RenderList/RenderList';


export default function App() {
  return (
    <View>
      <Header title="📞 Seus Contatos 📱" paragraph={`Total de Contatos: ${maxPeoples}`}/>
      <RenderList/>
    </View>
  );
}


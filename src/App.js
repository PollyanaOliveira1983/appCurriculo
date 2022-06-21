import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/FotoLinkedin.jpeg'; 
import Card from './components/Card/index';

const App = () => {
  
  function handleRedeSocial(rede_social) {
    switch (rede_social){
      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/pollyanaoliveira/')
      break  
      case 'github':
        Alert.alert('https://github.com/PollyanaOliveira1983')
      break
      case 'instagram':
        Alert.alert('https://www.instagram.com/pollyanaoliveiramartins/')
      break
    }
  }
  
  return (
    <>
    <View style={style.page}>
      <View style={style.container_cabecalho}>
        <Image source={foto} style={style.foto}/>
        <Text style={style.nome}>Pollyana Oliveira</Text>
        <Text style={style.funcao}>Desenvolvedor JavaFullStack</Text>
        <View style={style.redes_sociais}>
                   
          <TouchableOpacity onPress={()=> handleRedeSocial('Meu Linkedin','linkedin')}>
            <Icon name="linkedin" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('Meu Github','github')}>
            <Icon name="github" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('Meu Instagram','instagram')}>
            <Icon name="instagram" size={30}/>
          </TouchableOpacity>
        </View>
      </View>
  
      <Card titulo="Formação Academica">
          <Text style={style.card_content_text}>Letras-Uniseb</Text>
          <Text style={style.card_content_text}>RH-Faculdade do Trabalho</Text>
          <Text style={style.card_content_text}>Analise e Desenvolvimento de Sistemas-Uninter</Text>
        
      </Card>
      <Card titulo="Experiências Profissionais">
            <Text style={style.card_content_text}>Accenture</Text>
            <Text style={style.card_content_text}>TQI</Text>
            <Text style={style.card_content_text}>Zup</Text>
        
      </Card>  
    </View>
    </>
  )
};

const style = StyleSheet.create({

  page:{
    backgroundColor:'#E7E7E7',
    flex:1,
  },
  container_cabecalho: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,

  },
  foto: {
    width:250,
    height:250,
    borderRadius:125,
  },
  nome:{
    fontSize:26,
    fontWeight:'bold',
    marginTop:10,

  },
  funcao:{
    color:'#939393',
    marginBottom:10,
    
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color:'#939393',
    marginBottom:10,
  }, 

})

export default App;

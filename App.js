import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { PaperProvider, TextInput, MD3LightTheme as DefaultTheme } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: '#11111',
  },
};






export default function App() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (

    <PaperProvider theme={DefaultTheme}>
      <View style={
        {
          alignItems: 'center',
          marginTop: 50
        }
      }>
        <Image
          source={require('./Material/imagem/logoTipo.jpg')}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        label="E-mail"
        onChangeText={(login) => { setLogin(login) }}
        style={{ marginTop: 50, marginLeft: 20, marginRight: 20 }}
        mode={"outlined"}
        
      />

      <TextInput
        label="Senha"
        onChangeText={(text) => { setSenha(text) }}
        style={{ marginTop: 50, marginLeft: 20, marginRight: 20 }}
        mode={"outlined"}
        secureTextEntry={true}
      />
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

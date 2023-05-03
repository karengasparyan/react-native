import React from 'react';
import { View, Text, Button, TextInput } from "react-native";

const HomeScreen: React.FC = ({ navigation }: any) => {
  const handleChange = () => {
    navigation.navigate('Login');
  }
  return (
    <View>
      <TextInput placeholder="login"/>
      <TextInput placeholder="password"/>
      <Button onPress={handleChange} title="Login"/>
      <Button onPress={handleChange} title="Registration"/>
    </View>
  );
};

export default HomeScreen;

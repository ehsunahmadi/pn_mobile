import { router } from 'expo-router';
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { state } from '../../store';

export default function OTP() {
  const [text, setText] = React.useState('');

  const handleInputChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    state.authStatus = 'authenticated';
    router.replace('/');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter OTP"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleInputChange}
        value={text}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

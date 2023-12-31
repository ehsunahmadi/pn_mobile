import { router } from 'expo-router';
import React from 'react';
import { Button, TextInput, View } from 'react-native';

export default function PhoneNumber() {
  const [text, setText] = React.useState('');

  const handleInputChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    router.replace('/registration/otp');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Phone Number"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleInputChange}
        value={text}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

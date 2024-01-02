import { router } from 'expo-router';
import React from 'react';
import {
  Button,
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';

export default function PhoneNumber() {
  const [text, setText] = React.useState('');

  const refInput = React.useRef<TextInput>(null);
  React.useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
  }, []);

  function handleInputChange(text: string) {
    setText(text);
  }

  async function handleSubmit() {
    if (!text) return;
    // await requestVerification(text, VerificationTransport.SMS);
    router.replace('/registration/otp');
  }

  function handleKeyDown(
    event: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) {
    if (event.nativeEvent.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <View>
      <TextInput
        ref={refInput}
        placeholder="Enter Phone Number"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleInputChange}
        value={text}
        onKeyPress={handleKeyDown}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

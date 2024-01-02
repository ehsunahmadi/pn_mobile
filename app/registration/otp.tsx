import { router } from 'expo-router';
import React from 'react';
import {
  Button,
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import { state } from '../../ts/store';

export default function OTP() {
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

  function handleSubmit() {
    state.authStatus = 'authenticated';
    router.replace('/');
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
        placeholder="Enter OTP"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleInputChange}
        onKeyPress={handleKeyDown}
        value={text}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

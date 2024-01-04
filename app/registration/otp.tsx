import { router } from 'expo-router';
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { state } from '../../ts/store';
// import { registerSingleDevice } from '../../ts/textsecure/account_manager';

export default function OTP() {
  const [text, setText] = React.useState('');
  const [verified, setVerified] = React.useState(false);

  const refInput = React.useRef<TextInput>(null);
  React.useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
  }, []);

  function handleInputChange(text: string) {
    if (text.length == 7) {
      return;
    }
    setText(text);
    if (text.length == 6) {
      setVerified(true);
      return;
    }
    setVerified(false);
  }

  async function register() {
    // await registerSingleDevice('+989901157601', text, '123');
    state.authStatus = 'authenticated';
    router.replace('/');
  }

  return (
    <View>
      <TextInput
        ref={refInput}
        placeholder="Enter OTP"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleInputChange}
        value={text}
        keyboardType="numeric"
      />
      <Button title="Register" onPress={register} disabled={!verified} />
    </View>
  );
}

import { Redirect } from 'expo-router';
import { useSnapshot } from 'valtio';
import { state } from '../../store';

export default function Index() {
  const { authStatus } = useSnapshot(state);

  if (authStatus === 'authenticated') {
    return <Redirect href={'/'} />;
  }

  return <Redirect href={'/registration/phone_number'} />;
}

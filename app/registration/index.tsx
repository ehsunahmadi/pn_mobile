import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href={'/registration/phone_number'} />;
}
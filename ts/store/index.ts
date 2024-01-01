import { proxy } from 'valtio';

type AuthStatus = 'authenticated' | 'unauthenticated';

export const state = proxy<{ authStatus: AuthStatus }>({
  authStatus: 'unauthenticated',
});

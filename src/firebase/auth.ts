import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import app from './app';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

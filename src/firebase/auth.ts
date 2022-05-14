import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import app from './app';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => signInWithPopup(auth, provider);

export default signInWithGoogle;

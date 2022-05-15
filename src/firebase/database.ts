import { User } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

import app from './app';

const firestore = getFirestore(app);

const saveUserProfile = async (user: User, additionalData?: any) => {
  const userRef = doc(firestore, 'users', user.uid);
  const userSnapshot = await getDoc(userRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date().toISOString();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  return userRef;
};

export default saveUserProfile;

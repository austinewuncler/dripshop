import { User } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

import app from './app';

const firestore = getFirestore(app);

const saveUserProfile = async (user: User | null, additionalData?: any) => {
  if (!user) return;
  const userRef = doc(firestore, 'users', user.uid);
  const userSnapshot = await getDoc(userRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err: any) {
      console.log(err);
    }
  }
};

export default saveUserProfile;

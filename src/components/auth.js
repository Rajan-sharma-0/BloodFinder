import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase";
const signup = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    await sendEmailVerification(user);
    console.log("Verification email sent to your inbox");
    return user;
  } catch (error) {
    throw error;
  }
};
// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       if (user.emailVerified) {
//         console.log("Email is verified.");
//         setIsVerified(true);
//       } else {
//         console.log("Email is not verified.");
//         setIsVerified(false);
//       }
//     } else {
//       console.log("No user is signed in.");
//     }
//   });

//   return () => unsubscribe();
// }, [setIsVerified]);
const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredentials.user;
  } catch (error) {
    throw error;
  }
};
export { signup, login };

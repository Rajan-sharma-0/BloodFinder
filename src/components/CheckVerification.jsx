import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useContext } from 'react'
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import "./Styles/CheckVerification.css"
export default function CheckVerification() {
//       useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) { 
//         console.log(user)
//         if (user.emailVerified) {
//           console.log("Email is verified.");
//           setIsVerified(true);
//         } else {
//           console.log("Email is not verified.");
//           setIsVerified(false);
//         }
//       } else {
//         console.log("No user is signed in.");
//       }
//     });

//     return () => unsubscribe();
//   }, [setIsVerified]);
const {setIsVerified} = useContext(UserContext);
  const navigate = useNavigate()
    const handleClick = ()=>{
        const auth = getAuth();
        const user = auth.currentUser;
        // onAuthStateChanged(auth, (user)=>{
            if (user) { 
                console.log(user)
                // console.log("user is ",user.emailVerified)
                if (user.emailVerified) {
                  console.log("Email is verified.");
                  setIsVerified(true);
                  navigate('/')
                } else {
                  console.log("Email is not verified.");
                  setIsVerified(false);
                }
              } else {
                console.log("No user is signed in.");
              }
        //     }
        // )
    }
  return (
    <div className='checkVerify'>
      <div className="checkVerifyMain">

    
        <h1>Check your Email for Verification</h1>
        <span>Verification might take some time</span>
        <button onClick={handleClick}>Verified?</button>
        </div>
    </div>
  )
}

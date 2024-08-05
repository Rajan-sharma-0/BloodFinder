import { collection, addDoc, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const createUser = async (userInfo)=>{
    try {
        const docCollection = collection(db, 'users')
        const docRef = await addDoc(docCollection, userInfo)
        console.log("User Added with id ", docRef.id)
        return docRef.id;
    } catch (error) {
        console.log("Something unexpected occured while creting user ", error.message)
    }
}
const createDonor = async(userInfo)=>{
    try {
        const docCollection = collection(db, 'donors')
        const userRef = doc(db, 'donors', userInfo.uid);
        const userSnap = await getDoc(userRef)
        if(userSnap.exists()){
            console.log("User already exists", userSnap.data())
            return userSnap.data()
        }
        else{
            const docRef = await setDoc(userRef, userInfo)
            console.log("Donor added with donor info ", userInfo)
            return docRef.id;
        }
        } catch (error) {
        console.log("Something happend while creating donor ", error)
    }
}
// const loginUser = async(userInfo)=>{
//     try {
        
//     } catch (error) {
        
//     }
// }
export {createUser, createDonor};
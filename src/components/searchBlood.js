import { collection, doc, getDocs, query, where,  } from "firebase/firestore";
import { db } from "../Firebase";

const findDonor = async (donorInfo) => {
    try {
      const docCollection = collection(db, 'donors');
      const q = query(docCollection, where("blood", "==", donorInfo.blood),where("state", "==", donorInfo.state));
      
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const donors = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          donors.push(doc.data());
        });

        return donors;
      } else {
        console.log("No donor found");
        return null;
      }
    } catch (err) {
      console.log("Error executing the query to find donor", err);
      return null;
    }
  };
export{findDonor}
import React, { useContext, useEffect, useState } from 'react'
import './Styles/BloodFind.css'
import { UserContext } from '../UserContext';
import { findDonor } from './searchBlood';
import { DonorContext } from '../DonorContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function BloodFind() {

  let AndraPradesh = ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"];
  let ArunachalPradesh = ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"];
  let Assam = ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup (Rural)","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"];
  let Bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
  let Chhattisgarh = ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"];
  let Goa = ["North Goa","South Goa"];
  let Gujarat = ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"];
  let Haryana = ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"];
  let HimachalPradesh = ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
  let JammuKashmir = ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"];
  let Jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
  let Karnataka = ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"];
  let Kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
  let MadhyaPradesh = ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"];
  let Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
  let Manipur = ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"];
  let Meghalaya = ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
  let Mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
  let Nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
  let Odisha = ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"];
  let Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
  let Rajasthan = ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"];
  let Sikkim = ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"];
  let TamilNadu = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"];
  let Telangana = ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
  let Tripura = ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"];
  let UttarPradesh = ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
  let Uttarakhand = ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"];
  let WestBengal = ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
  let AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"];
  let Chandigarh = ["Chandigarh"];
  let DadraHaveli = ["Dadra Nagar Haveli"];
  let DamanDiu = ["Daman","Diu"];
  let Delhi = ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
  let Lakshadweep = ["Lakshadweep"];
  let Puducherry = ["Karaikal","Mahe","Puducherry","Yanam"];
  const [stateChoice, setStateChoice] = useState('')
  const [districtChoice, setDistrictChoice] = useState([])
  const [districtSelected , setDistrictSelected] = useState('')
  useEffect(() => {
    const updateStateChoice = ()=>{

    
    try {
    
    switch (stateChoice) {
      case "Andhra Pradesh":
          setDistrictChoice(AndraPradesh);
          break;
      case "Arunachal Pradesh":
          setDistrictChoice(ArunachalPradesh);
          break;
      case "Assam":
          setDistrictChoice(Assam);
          break;
      case "Bihar":
          setDistrictChoice(Bihar);
          break;
      case "Chhattisgarh":
          setDistrictChoice(Chhattisgarh);
          break;
      case "Goa":
          setDistrictChoice(Goa);
          break;
      case "Gujarat":
          setDistrictChoice(Gujarat);
          break;
      case "Haryana":
          setDistrictChoice(Haryana);
          break;
      case "Himachal Pradesh":
          setDistrictChoice(HimachalPradesh);
          break;
      case "Jammu and Kashmir":
          setDistrictChoice(JammuKashmir);
          break;
      case "Jharkhand":
          setDistrictChoice(Jharkhand);
          break;
      case "Karnataka":
          setDistrictChoice(Karnataka);
          break;
      case "Kerala":
          setDistrictChoice(Kerala);
          break;
      case "Madhya Pradesh":
          setDistrictChoice(MadhyaPradesh);
          break;
      case "Maharashtra":
          setDistrictChoice(Maharashtra);
          break;
      case "Manipur":
          setDistrictChoice(Manipur);
          break;
      case "Meghalaya":
          setDistrictChoice(Meghalaya);
          break;
      case "Mizoram":
          setDistrictChoice(Mizoram);
          break;
      case "Nagaland":
          setDistrictChoice(Nagaland);
          break;
      case "Odisha":
          setDistrictChoice(Odisha); 
          break;
      case "Punjab":
          setDistrictChoice(Punjab);
          break;
      case "Rajasthan":
          setDistrictChoice(Rajasthan);
          break;
      case "Sikkim":
          setDistrictChoice(Sikkim);
          break;
      case "Tamil Nadu":
          setDistrictChoice(TamilNadu);
          break;
      case "Telangana":
          setDistrictChoice(Telangana);
          break;
      case "Tripura":
          setDistrictChoice(Tripura);
          break;
      case "Uttarakhand":
          setDistrictChoice(Uttarakhand); 
          break;
      case "Uttar Pradesh":
          setDistrictChoice(UttarPradesh);
          break;
      case "West Bengal":
          setDistrictChoice(WestBengal);
          break;
      case "Andaman and Nicobar Islands":
          setDistrictChoice(AndamanNicobar);
          break;
      case "Chandigarh":
          setDistrictChoice(Chandigarh);
          break;
      case "Dadra and Nagar Haveli":
          setDistrictChoice(DadraHaveli);  
          break;
      case "Daman and Diu":
          setDistrictChoice(DamanDiu);
          break;
      case "Delhi":
          setDistrictChoice(Delhi);
          break;
      case "Lakshadweep":
          setDistrictChoice(Lakshadweep);  
          break;
      case "Puducherry":
          setDistrictChoice(Puducherry); 
          break;
      default:
          setDistrictChoice([]);
          break;
  }
    
} catch (error) {
      console.log("An error occured ", error)
}
    }
    updateStateChoice();
  
  }, [stateChoice])
  const {user} = useContext(UserContext);
  const [blood, setBlood] = useState('')
  const {setDonors} = useContext(DonorContext)
  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const searchInfo = {
            state: stateChoice,
            district: districtSelected,
            blood: blood,
        }
        console.log("Searching for donor ")
       const donorsFound = await findDonor(searchInfo)
        setDonors(donorsFound)
        navigate('/donorlist')
    } catch (error) {
        console.log(" Error while searching donor", error)
    }
  }
  
 




  return (
    <div className='bloodFind'>
        <Navbar/>
        <form className="bloodFindMain" onSubmit={handleSubmit}>
            <h1>Find Blood Donors</h1>
            <div className="bloodFindInput">
              <label htmlFor="bloodGroup">Choose Blood Group</label>
              <select name="bloodGroup" id="bloodGroup" value={blood} onChange={e=>setBlood(e.target.value)} required>
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                
              </select>
            </div>
            <div className="bloodFindInput">
              <label htmlFor="selectState">Choose State</label>
              <select name="selectState" id="selectState" required value={stateChoice} onChange={e=>setStateChoice(e.target.value)}>
                <option value="">Select State</option>
                <option value="Andra Pradesh">Andra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madya Pradesh">Madya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Orissa">Orissa</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttaranchal">Uttaranchal</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        <option disabled style={{backgroundColor:"#aaa", color:"#fff"}}>UNION Territories</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadeep">Lakshadeep</option>
                        <option value="Pondicherry">Pondicherry</option>
                
              </select>
            </div>
            <div className="bloodFindInput">
              <label htmlFor="selectDistrict">Choose District</label>
              <select name="selectDistrict" id="selectDistrict" required value={districtSelected} onChange={e=>setDistrictSelected(e.target.value)}>
                <option value="">Select District</option>
                {districtChoice.map((element,index) => (
                <option key={index} value={element}>{element}</option>
                  
                ))}
              </select>
            </div>
            <div className="bloodFindButton">
          <button className="search" type='submit'>Search</button>
        </div>
        </form>
        <div className="bloodFindDonate">
            
        </div>
    </div>
  )
}

import React, {useState} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Text from './components/Text/Text';
import Auth from './components/Auth/Auth';
import APIHandler from './api/APIHandler';
import axios from "axios";
// import { handleSubmitLogin, handleSubmitText } from './api/SubmitFct';

function App() {
  const [accessToken, setaccessToken] = useState("")

    const handleSubmitLogin = async (e :any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const res = await axios.post("http://localhost:2000/api/token", {email : email});
        console.log("BACK RESPONSE :",res.data)
        setaccessToken(res.data.accessToken);
        console.log("Form login submited")
    }

    const handleSubmitText = async (e :any) => {
      e.preventDefault();
      const textUnjustified = e.target[0].value;
      const resJustify = await APIHandler.post("/api/justify", textUnjustified ,
          {
              headers: { 
                Authorization: `Bearer ${accessToken}`,
                "Content-Type" : "text/plain"
              }
          }
      )      
      e.target[0].value = resJustify.data

      console.log("RESPONSE SERVER :")
      console.log(resJustify.data)
      console.log("Form submited")
  }


  return (
    <div className="App">
      <Header/>
      <Auth login={handleSubmitLogin}/>
      <Text text={handleSubmitText}/>
    </div>
  );
}

export default App;

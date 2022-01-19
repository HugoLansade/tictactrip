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
  const [refreshToken, setrefreshToken] = useState("")


    const handleSubmitLogin = async (e :any) => {
        e.preventDefault();
        const email = e.target[0].value;
        console.log(email)

        const res = await axios.post("http://localhost:2000/api/token", {email : email});
        console.log(res.data)
        setaccessToken(res.data.accessToken);
        setrefreshToken(res.data.refreshToken);
        console.log("Form login submited")
        // return {accessToken : res.data.accessToken, refreshToken : res.data.refreshToken}
    }



    const handleSubmitText = async (e :any) => {
      e.preventDefault();

      const textUnjustified = e.target[0].value;
      console.log(textUnjustified)        
      const res1 = await APIHandler.post("/api/justify", textUnjustified ,
          {
              headers: { 
                Authorization: `Bearer ${accessToken}`,
                "Content-Type" : "text/plain" //lorsque l'on utilise ce fragement on n'a plus acces au body
              }
          }
      )
      console.log("RESPONSE SERVER :")

      console.log(res1.data)
      console.log(res1)

      e.target[0].value = res1.data
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

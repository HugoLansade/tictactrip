import React, {useState} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Text from './components/Text/Text';
import Auth from './components/Auth/Auth';
import APIHandler from './api/APIHandler';

function App() {
  const [accessToken, setaccessToken] = useState("")
  const [refreshToken, setrefreshToken] = useState("")

    const handleSubmitLogin = async (e :any) => {
        e.preventDefault();
        const email = e.target[0].value;
        console.log(email)

        const res = await APIHandler.post("/api/token", {email : email});
        console.log(res.data)
        setaccessToken(res.data.accessToken);
        setrefreshToken(res.data.refreshToken);
        console.log("Form login submited")
    }

    const handleSubmitText = async (e :any) => {
      e.preventDefault();

      const textUnjustified = e.target[0].value;
      console.log(textUnjustified)        
      const res1 = await APIHandler.post("/api/justify", {text : textUnjustified },
          {
              headers: { Authorization: `Bearer ${accessToken}` }
          }
      )
      console.log("res1.data.justifyText")

      console.log(res1.data.textJustified)
      e.target[0].value = res1.data.textJustified
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

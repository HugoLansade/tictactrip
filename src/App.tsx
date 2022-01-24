import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Text from "./components/Text/Text";
import Auth from "./components/Auth/Auth";
import APIHandler from "./api/APIHandler";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("foo@bar.baz");

  // Token creation request
  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await APIHandler.post("/api/token", { email });
    setAccessToken(res.data.token);
  };

  // Text justification request
  const handleSubmitText = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resJustify = await APIHandler.post("/api/justify", text, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "text/plain",
      },
    });
    setText(resJustify.data);
  };

  return (
    <div className="App">
      <Header />
      <Auth
        email={email}
        setEmail={setEmail}
        handleSubmitLogin={handleSubmitLogin}
      />
      <Text text={text} setText={setText} handleSubmitText={handleSubmitText} />
    </div>
  );
}

export default App;

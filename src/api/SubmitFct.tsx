import APIHandler from '../api/APIHandler';


export const handleSubmitLogin = async (e :any) => {
    e.preventDefault();
    const email = e.target[0].value;
    console.log(email)

    const res = await APIHandler.post("/api/token", {email : email});
    console.log(res.data)
    console.log("Form login submited")
    // return {accessToken : res.data.accessToken, refreshToken : res.data.refreshToken}
}
let accessToken = "a";
// export const handleSubmitText = async (accessToken : string, e? :any) => {
export const handleSubmitText = async ( e? :any) => {

  e.preventDefault();

  const textUnjustified = e.target[0].value;
  console.log(textUnjustified)        
  const res = await APIHandler.post("/api/justify", {text : textUnjustified },
      {
          headers: { Authorization: `Bearer ${accessToken}` }
      }
  )
  console.log("res.data.justifyText")

  console.log(res.data.textJustified)
  e.target[0].value = res.data.textJustified
  console.log("Form submited")
}
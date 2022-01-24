import axios from "axios";

// Creation of a short cut to write only the method and to be able to change of port easely
const APIHandler = (() => {
  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });
})();

export default APIHandler;

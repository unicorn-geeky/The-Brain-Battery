import axios from 'axios';
const Instance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Content-Type': 'application/json'      
    }
  });
  console.log("serrvv==process.env.GOOGLE_CLIENT_ID---",process.env.GOOGLE_CLIENT_ID,process.env.API_URL);

  export default Instance
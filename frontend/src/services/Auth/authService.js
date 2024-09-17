import Instance from "../baseService";

async function signup(data) {
    return  await Instance.post('/api/auth/signup', data)   
   
  }

  async function signin(data) {
    return  await Instance.post('/api/auth/login', data)   
   
  }

  async function googleAuth(data) {
    return  await Instance.get(`/api/auth/google?code=${data}`)   
   
  }


  const authService = {
    signup,
    signin,
    googleAuth
  }

  export default authService;
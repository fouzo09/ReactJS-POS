const option = (method, body)=>{
    return {
      method: method,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(body)
    }
};

const AUTH_BASE_URL = 'http://localhost:5001/api';

export { option, AUTH_BASE_URL };
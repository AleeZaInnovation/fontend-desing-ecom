const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "Content-Type",
    // "Access-Control-Allow-Methods": "GET, POST,PUT, DELETE,OPTION",
    Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
    Accept: "application/json",
  },
};

console.log(config);
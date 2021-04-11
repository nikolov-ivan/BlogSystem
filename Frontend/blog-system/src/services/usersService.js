export const Register = (userData) => {
  return fetch("https://localhost:44362/api/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
};

export const signIn = (userData) => {
  return fetch("https://localhost:44362/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),    
  }).then(data=>data.json())
};

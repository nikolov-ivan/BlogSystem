export const Login = (email, password) => {
  return fetch("https://localhost:44362/api/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  }).then((data) => data.json());
};

export const Register = (email, password) => {
    return fetch("https://localhost:44362/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email, password),
    });
  };

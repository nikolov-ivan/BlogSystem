export const deleteP = (id) => {
  return fetch(`https://localhost:44362/api/delete/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};
export const getById = (postId) => {
  return fetch(`https://localhost:44362/api/getbyid/${postId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getAll = () => {
  return fetch("https://localhost:44362/api/getall")
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const create = (userData) => {
  return fetch("https://localhost:44362/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

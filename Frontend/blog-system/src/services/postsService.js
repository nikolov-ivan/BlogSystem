export const getById = (postId) => {
    return fetch(`https://localhost:44362/api/getbyid/${postId}`)
    .then(res=> res.json())
    .catch(error=>console.log(error));   

}

export const getAll = () => {
    return fetch('https://localhost:44362/api/getall')
    .then(res=> res.json())
    .catch(error=>console.log(error));   

}
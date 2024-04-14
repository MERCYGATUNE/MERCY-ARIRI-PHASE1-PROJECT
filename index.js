
const apiUrl=`http://localhost:3000/Cuisines`;


fetch(apiUrl)
    .then(res =>res.json())
    .then ((data) => console.log(data)); 
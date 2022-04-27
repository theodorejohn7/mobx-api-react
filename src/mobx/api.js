import axios from 'axios';


// const     httpClient = "https://reqres.in/api/users" ;



const httpClient = axios.create({
    baseURL: 'https://reqres.in/api/users',
     
  });

export    default httpClient


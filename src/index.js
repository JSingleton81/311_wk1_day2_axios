// import axios here
const axios = require('axios');
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'



const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  
  return axios.get(url)
    .then(response => {
      // Success! Handle the response data as needed.
      console.log(response);
      return response;
    })
    .catch(error => {
      // An error occurred. Handle it here.
      console.error('Error fetching data: ', error);
      return null;
    });
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios.get(url)
    .then(response => {
      console.log(response.data); 
      return response.data;
    })

    .catch(error => {
      console.error('Error fetching movie by ID: ', error);
      throw error; 
    });
}

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios.get(url)
     .then(response => {
       console.log('Unexpected Success:', response.status);
       return response.status;
      })

     .catch(error => {
      //  console.error('Expected error fetching movie:', error.response ? error.response.status : error.message);
       return error.response.status; 
      });
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}
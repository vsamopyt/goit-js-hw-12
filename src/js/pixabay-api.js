// axios
import axios from 'axios';

export default  async function fetchPictures (URL,params) {

  return  await axios.get(URL,params)
  .then((response) => {
    // console.log(response.data);
    return response.data;
  })
  .catch(error => {
    console.log(error);
})

}



// export default  function fetchPictures (URL) {
//   return fetch(URL)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
// }


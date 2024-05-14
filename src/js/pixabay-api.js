// axios
import axios from 'axios';

export default  async function fetchPictures (URL,params) {
  return  await axios.get(URL,params)
  .then((response) => {
    return response.data;
  })
  .catch(error => {
    console.log(error);
})

}






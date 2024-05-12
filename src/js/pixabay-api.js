
export default  function fetchPictures (URL) {
  return fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}


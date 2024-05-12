export default function setGallery(data, selector) {
  const gallery = data.reduce((acc, item) => {
    const {
      likes,
      views,
      comments,
      downloads,
      tags,
      previewURL,
      largeImageURL,
      webformatURL,
    } = item;
    acc += `<li class='gallery-item'>
                  <a class='gallery-link' href= ${largeImageURL}>
                    <img class="gallery-image" src=${webformatURL} alt ="${tags}" width ="360" height ="152">
                    </a>
                      <div class ="conteiner-comments">
                        <div class= "container-comment">
                          <span class="comments-name">Likes</span>
                          <span class ="comments-value"> ${likes}</span>
                        </div>
                        <div class= "container-comment">
                          <span class="comments-name">Views</span>
                          <span class ="comments-value"> ${views}</span>
                        </div>
                        <div class= "container-comment">
                          <span class="comments-name">Comments</span>
                          <span class ="comments-value"> ${comments}</span>
                         </div>
                        <div class= "container-comment">
                          <span class="comments-name">Downloads</span>
                          <span class ="comments-value"> ${downloads}</span>
                        </div> 
                      </div>
                      </li>`;
    return acc;
  }, '');

  document.querySelector(selector).innerHTML = gallery;
}

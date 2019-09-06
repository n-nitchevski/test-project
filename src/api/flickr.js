const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';

export const fetchImages = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then((json) => json.map(album => ({url: album.url, thumbnail: album.thumbnailUrl}) )
    )
  })
};
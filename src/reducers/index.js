export default function images(state = {images:[], imageLoading: true}, action) {
  switch (action.type) {
    case 'IMAGES_RECEIVED':
      return {...state, images: action.images.map(img => ({...img, favorite: false}))};
    case 'LOAD_IMAGES_FAILURE':
      return {...state, imageLoading: false};
    case 'SELECT_IMAGE':
      return {...state, selectedImage: action.image, imageLoading: false};
    case 'FAVORITE_IMAGE':
        const modifiedImage = state.images[action.index];
        modifiedImage.favorite = !modifiedImage.favorite;
        return {...state, images: [...state.images.slice(0, action.index), modifiedImage, ...state.images.slice(action.index + 1)]}
    default:
      return state
  }
}

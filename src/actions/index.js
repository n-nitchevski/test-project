const LOAD_IMAGES = 'LOAD_IMAGES';
const SELECT_IMAGE = 'SELECT_IMAGE';
const FAVORITE_IMAGE = 'FAVORITE_IMAGE';

export function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    image
  }
}

export function loadImages() {
  return {
    type: LOAD_IMAGES
  }
}

export function starImage(index) {
    return {
        type: FAVORITE_IMAGE,
        index
    }
}
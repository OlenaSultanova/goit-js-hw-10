import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_Ld1OMTKeXemVD1e3o2kA4HZ5zJklh69XrS6EstTFKQMUAl9lRAbvb0TBDmrWey5g';

const api_key =
  'live_Ld1OMTKeXemVD1e3o2kA4HZ5zJklh69XrS6EstTFKQMUAl9lRAbvb0TBDmrWey5g';

const url = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return fetch(`${url}/breeds?api_key=${api_key}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

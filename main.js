const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY_QUERY = 'api_key={{YOUR_API_KEY}}';

const ERROR_NO_RESULTS_FOUND = 'ERROR_NO_RESULS_FOUND';
const ERROR_GENERIC = 'ERROR_GENERIC';

const CLASSNAME_IS_VISIBLE = 'is-visible';

const searchInput = document.querySelector('[data-binding="input"]');
const searchButton = document.querySelector('[data-binding="button"]');
const resultList = document.querySelector('[data-binding="list"]');
const resultImage = document.querySelector('[data-binding="result-image"]');
const errorMessage = document.querySelector('[data-binding="error"');

const showError = (e) => {
  switch (e) {
    case ERROR_NO_RESULTS_FOUND:
        errorMessage.innerHTML = 'No results found';
      break;

    default:
        errorMessage.innerHTML = 'Something went wrong';
      break;
  }

  errorMessage.classList.add(CLASSNAME_IS_VISIBLE);
}

const hideError = (e) => {
  errorMessage.classList.remove(CLASSNAME_IS_VISIBLE);
}

const showImage = (src) => {
  resultImage.src = src ? `https://image.tmdb.org/t/p/w400_and_h600_bestv2/${src}` : 'http://www.placecage.com/400/600';
  resultImage.classList.add(CLASSNAME_IS_VISIBLE);
}

const hideImage = () => {
  resultImage.classList.remove(CLASSNAME_IS_VISIBLE);
};

const showResults = () => {
  resultList.classList.add(CLASSNAME_IS_VISIBLE);
}

const hideResults = () => {
  resultList.classList.remove(CLASSNAME_IS_VISIBLE);
}

const renderListItem = (result) => {
  const releaseYear = result.release_date.split('-')[0];
  return `<li class="app__results-list-item" data-binding="result" data-id="${result.id}">${result.title} (${releaseYear})</li>`;
}

const getMovie = (id) => {
  hideResults();

  fetch(`${API_BASE_URL}/movie/${id}?${API_KEY_QUERY}`)
    .then(resp => {
      if (resp.status !== 200) {
        throw ERROR_GENERIC;
      }

      return resp.json();
    })
    .then(movieData => {
      showImage(movieData.poster_path);
    })
}

const getMovies = (searchQuery) => {

  hideResults();
  hideImage();

  const encodedQuery = encodeURI(`query=${searchQuery}`);

  fetch(`${API_BASE_URL}/search/movie?${encodedQuery}&${API_KEY_QUERY}`)
    .then(resp => {
      if (resp.status !== 200) {
        throw ERROR_GENERIC;
      }

      return resp.json();
    })
    .then(results => {
      if (results.total_results > 0) {
        const html = results.results.map(result => {
          return renderListItem(result);
        });

        resultList.innerHTML = html.slice(0, 5).join('');

        showResults();
      } else {
        throw ERROR_NO_RESULTS_FOUND;
      }
    }).catch((e) => {
      showError(e);
    });
};

searchButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (searchInput.value.length > 0) {
    hideError();
    hideImage();
    getMovies(searchInput.value);
  }
})

searchInput.addEventListener('keyup', (e) => {
  hideError();

  /// Enter key
  if (e.keyCode === 13 && searchInput.value.length > 0) {
    hideImage();
    getMovies(searchInput.value);
  }
})

resultList.addEventListener('click', (e) => {
  const resultClick = e.target.closest('[data-binding="result"]');

  if (resultClick) {
    getMovie(resultClick.dataset.id);
  }
});



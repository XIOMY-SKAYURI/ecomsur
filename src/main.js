// All movie
document.addEventListener("DOMContentLoaded", function() {
  'use strict'
  //  Listen for search submittal
    let type = document.querySelector(".all-movie").getAttribute('value');
    const BASE_URL = 'http://www.omdbapi.com/?s=';
    const key = '&apikey=6e5e2c65';
    let searchString = BASE_URL + type.split(' ').join('+')+ key ;

    console.log(searchString)

    getData(searchString, listAllMovies);

    


  // Lists the search result as links in the target div
  function listAllMovies(searchResp) {
    const resultContainer = document.querySelector(".all-movie");
    // clear any prior search content
    // document.querySelector("#movie-title").value = '';
    // resultContainer.innerHTML = '';
    

    let results = searchResp.Search;
    for ( let i = 0; i < results.length; i++) {
      let title = results[i].Title;
      let movieTitle = title.toUpperCase()  ;
      let imgMovie = results[i].Poster;
      let type = results[i].Type;
      let year = results[i].Year;

      let cardMovie = `
      <div class="card-movie">
      
        <a href="#" id="movie-title-${i}" class="movieTitle">${movieTitle}</a>
        <img src=${imgMovie} id="movie-img-${i}" class="imgMovie" >

        <div class="aditional-information">
          <div>
          <span></span><p  id="movie-type-${i}" >Type:${type}</p>
          </div>

          <span></span>

          <div>
            <span></span><p  id="movie-year-${i}" >Year:${year}</p>
          </div>
        </div>

        <button class="add">add</button>
        

      </div>
      `;
     
      resultContainer.insertAdjacentHTML('beforeend', cardMovie);

  
    }
  }

  // Fetch API call to get json from omdbiapi or favorites
  function getData(targetURL, resultCallback) {
    fetch(targetURL, {
      method: 'get'
    })
    .then(function(response) {
      return response.json();
    })
    // send the search results to the list generator
    .then(function(jsonData) {
      resultCallback(jsonData);
    })
    .catch(function(err) {
      console.log(err);
    });
  }

 
}); 
// wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  'use strict'
  //  Listen for search submittal
  document.querySelector('#search-button').addEventListener("click", function(e){
    const hiddeAllMovie = document.querySelector(".all-movie")
    hiddeAllMovie.style.display = 'none';
    let title = document.getElementById("movie-title").value;
    const BASE_URL = 'http://www.omdbapi.com/?s=';
    const key = '&apikey=6e5e2c65';
    let searchString = BASE_URL + title.split(' ').join('+')+ key ;

    console.log(searchString)

    getData(searchString, listMovies);
  });


  // Lists the search result as links in the target div
  function listMovies(searchResp) {
    const resultContainer = document.querySelector(".search-results");
    // clear any prior search content
    document.querySelector("#movie-title").value = '';
    resultContainer.innerHTML = '';
    

    let results = searchResp.Search;
    for ( let i = 0; i < results.length; i++) {
      let title = results[i].Title;
      let movieTitle = title.toUpperCase()  ;
      let img = results[i].Poster;
      let type = results[i].Type;
      let year = results[i].Year;

      let cardMovie = `
      <div class="card-movie">
      
        <a href="#" id="movie-title-${i}" class="movieTitle">${movieTitle}</a>
        <img src=${img} id="movie-img-${i}" class="img">

        <div class="aditional-information">
          <div>
            <span></span><p  id="movie-type-${i}" >Type:${type}</p>
          </div>

          <span></span>

          <div>
            <span></span><p  id="movie-year-${i}" >Year:${year}</p>
          </div>


        </div>

        <button class="add">add</button>
        

      </div>
      `;
     
      resultContainer.insertAdjacentHTML('beforeend', cardMovie);

    }
  }

  // Fetch API call to get json from omdbiapi or favorites
  function getData(targetURL, resultCallback) {
    fetch(targetURL, {
      method: 'get'
    })
    .then(function(response) {
      return response.json();
    })
    // send the search results to the list generator
    .then(function(jsonData) {
      resultCallback(jsonData);
    })
    .catch(function(err) {
      console.log(err);
    });
  }

 
});


  
 
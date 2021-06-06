// All movie
document.addEventListener("DOMContentLoaded", function() {
  "use strict"

    let type = document.querySelector(".all-movie").getAttribute("value");
    const BASE_URL = "//www.omdbapi.com/?s=";
    const key = "&apikey=6e5e2c65";
    let searchString = BASE_URL + type.split(" ").join("+")+ key ;

    console.log(searchString)

    getData(searchString, listAllMovies);

    
  function listAllMovies(searchResp) {
    const resultContainer = document.querySelector(".all-movie");

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
          <span></span><p  id="movie-type-${i}" ><strong>Type:</strong>${type}</p>
          </div>

          <span></span>

          <div>
            <span></span><p  id="movie-year-${i}" ><strong>Year:</strong>${year}</p>
          </div>
        </div>

        <button class="add" id="movie-btn-${i}">buy</button>
        

      </div>
      `;
  
      resultContainer.insertAdjacentHTML("beforeend", cardMovie);

      resultContainer.querySelector(`#movie-btn-${i}`).addEventListener("click", function(){
        addCar(results[i])
      })
    }
    }
    function addCar(result) {
      
      let listMovie = document.querySelector(".list-movie-car");
   
      listMovie.insertAdjacentHTML("beforeend", `<div><li href="#" id="style-list">${result["Title"]}</li>
      <img class="trash" src="./img/trash.png"  ></div>
      `)
   
    }
   
  

  function getData(targetURL, resultCallback) {
    fetch(targetURL, {
      method: "get"
    })
    .then(function(response) {
      return response.json();
    })

    .then(function(jsonData) {
      resultCallback(jsonData);
    })
    .catch(function(err) {
      console.log(err);
    });
  }

 
}); 


// search movie for name
document.addEventListener("DOMContentLoaded", function() {
  "use strict"

  document.querySelector('#search-button').addEventListener("click", function(e){
    const hiddeAllMovie = document.querySelector(".all-movie")
    hiddeAllMovie.style.display = "none";
    let title = document.getElementById("movie-title").value;
    const BASE_URL = "//www.omdbapi.com/?s=";
    const key = "&apikey=6e5e2c65";
    let searchString = BASE_URL + title.split(" ").join("+")+ key ;

    console.log(searchString)

    getData(searchString, listMovies);
  });


  function listMovies(searchResp) {
    const resultContainer = document.querySelector(".search-results");
    
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
            <span></span><p  id="movie-type-${i}" ><strong>Type:</strong>${type}</p>
          </div>

          <span></span>

          <div>
            <span></span><p  id="movie-year-${i}" ><strong>Year:</strong>${year}</p>
          </div>


        </div>

        <button class="add" id="movie-btn-${i}">buy</button>
        

      </div>
      `;
     
      resultContainer.insertAdjacentHTML("beforeend", cardMovie);

      resultContainer.querySelector(`#movie-btn-${i}`).addEventListener("click", function(){
        addCar(results[i])
      })
    }
    }
    function addCar(result) {
      
      let listMovie = document.querySelector(".list-movie-car");
   
      listMovie.insertAdjacentHTML("beforeend", `<div><li href="#" id="style-list">${result["Title"]}</li>
      <img class="trash" src="./img/trash.png"  ></div>
      `)
   
    }

  
  // Fetch API call to get json from omdbiapi or favorites
  function getData(targetURL, resultCallback) {
    fetch(targetURL, {
      method: "get"
    })
    .then(function(response) {
      return response.json();
    })
  
    .then(function(jsonData) {
      resultCallback(jsonData);
    })
    .catch(function(err) {
      console.log(err);
    });
  }

 
});


const APIKEY = "api_key=8a0ef91e16ea550cf297a755c1ccbd3d";
const URL ="https://api.themoviedb.org/3";
const API = URL+ '/discover/movie?sort_by=popularity.desc&'+APIKEY;
const URLPOSTER = "https://image.tmdb.org/t/p/w500";


const getData = (archivo) => {
    return (fetch(archivo)
    .then ((response) => response.json())
    .then((json)=>{
        // console.log(json);
        fillData(json.results);
    })
    .catch((error) =>{
        console.log("Error in the API", error);
    })
    );
}

const fillData = (data) => {
    let html = "";
    data.forEach(mv => {
      html += '<div class="card" style="width: 18rem; margin-left:15px; margin-bottom:10px">';
      html += `<img src="${URLPOSTER+mv.backdrop_path}" class="card-img-top" alt="">`;
      html += '<div class="card-body">';
      html += `<h5 class="card-title">${mv.original_title}</h5>`;
      html += `<p class="card-text text-justify">${mv.overview}</p>`;
      html += `<p class="card-text text-center">Fecha de estreno: ${mv.release_date}</p>`;
      html += `<p class="card-text text-center">Puntuación: ${mv.vote_average}</p>`;
      html += "</div>";
      html += "</div>";
     
    });
    document.getElementById("infomovie").innerHTML = html;
};

    getData(API);

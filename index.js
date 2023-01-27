const fetchData1 = async function () {
  //dichiaro la funzione /che deve essere async) con fetch al suo intern
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=onerepublic"
    ); //eseguo il fetch e lo associo alla var "res" (response)
    console.log(res);
    if (res.ok) {
      //se la proprietà "ok" di res è true, procedo a convertire in oggetto (col metodo json)
      let data = await res.json();
      /* console.log("data", data); */

      let jsonObject = Object.values(data);
      let jsonArray = Object.values(jsonObject[0]);
      /*  console.log("L'array è ", jsonArray); */
      // forEach sul nuovo array per vedere tutte le canzoni
      /*  jsonArray.forEach((songs) => {
        console.log(
          "Nome canzone: ",
          songs.title,
          "Autore: ",
          songs.artist.name
        );
      }); */

      // ************** popolo sezione 1 **************

      const cardsRow = document.getElementById("cards");
      cardsRow.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0">
          <div class="card">
            <img src="${jsonArray[1].album.cover_medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${jsonArray[1].title}</h5>
              <p class="card-text">
                ${jsonArray[1].artist.name}
              </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0">
          <div class="card">
            <img src="${jsonArray[18].album.cover_medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${jsonArray[18].title}</h5>
              <p class="card-text">
                ${jsonArray[18].artist.name}
              </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0">
          <div class="card">
            <img src="${jsonArray[15].album.cover_medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${jsonArray[15].title}</h5>
              <p class="card-text">
                ${jsonArray[15].artist.name}
              </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 mb-3 mb-sm-0">
          <div class="card">
            <img src="${jsonArray[24].album.cover_medium}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${jsonArray[24].title}</h5>
              <p class="card-text">
                ${jsonArray[24].artist.name}
              </p>
              </div>
            </div>
          </div>
        </div>`;

      // ************* popolo sezione 2 ***************
      const prefSongDiv = document.getElementById("prefSong");
      prefSongDiv.innerHTML = `<div class="col mb-3 mb-sm-0"  >
      <div class="card text-center" >
            <img src="${jsonArray[1].album.cover_xl}" class="card-img-top rounded-top" alt="...">
        <div class="card-body">
            <h3 class="card-title">${jsonArray[1].title}</h3>
        </div>
        </div>
        </div>
        `;
    } else {
      //se "ok" non è true, significa che la chiamata è andata a buon fine ma c'è un problema di risposta
      console.log("Porcapaletta");
    }
  } catch (error) {
    //il catch invece avviene se c'è un problema a monte, es. connessione
    console.log("errore di fetch -> catch", error);
  }
};

const fetchData2 = async function () {
  try {
    let res1 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
    ); //eseguo il fetch e lo associo alla var "res" (response)
    console.log(res1);
    if (res1.ok) {
      //se la proprietà "ok" di res è true, procedo a convertire in oggetto (col metodo json)
      let data1 = await res1.json();
      console.log("data", data1);

      let jsonObject1 = Object.values(data1);
      let jsonArray1 = Object.values(jsonObject1[0]);
      console.log("L'array è ", jsonArray1);
      // forEach sul nuovo array per vedere tutte le canzoni
      jsonArray1.forEach((songs) => {
        console.log("Album: ", songs.album.title);
      });
      console.log(jsonArray1[0].album.title);
      let myCarousel = document.getElementById("myCarousel");
      myCarousel.innerHTML = `
       <div class="carousel-inner">
    '<div class="carousel-item active">
      <img src="${jsonArray1[0].album.cover_xl}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${jsonArray1[0].album.title}</h5>
         <a href="${jsonArray1[0].album.tracklist}">Tracklist </a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${jsonArray1[2].album.cover_xl}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-caption d-none d-md-block">
        <h5>${jsonArray1[2].album.title}</h5>
         <a href="${jsonArray1[2].album.tracklist}">Tracklist </a>
      </div>
    <div class="carousel-item">
      <img src="${jsonArray1[0].album.cover_xl}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${jsonArray1[0].album.title}</h5>
         <a href="${jsonArray1[0].album.tracklist}">Tracklist </a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>`;
    } else {
      console.log("Porcapaletta");
    }
  } catch (error) {
    //il catch invece avviene se c'è un problema a monte, es. connessione
    console.log("errore di fetch -> catch", error);
  }
};

fetchData1(); //eseguo il fetch
fetchData2();

let fetchData = async function (a) {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${a}`
    );
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let jsonObject = Object.values(data);
      let jsonArray = Object.values(jsonObject[0]);
      /*  console.log("L'array è ", jsonArray); */
      // forEach sul nuovo array per vedere tutte le canzoni
      /* jsonArray.forEach((songs) => {
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

      // ************** creo lista dei titoli per l'alert *******************
      console.log("TITOLI CANZONI", document.querySelectorAll("h5"));
      let titoli = document.querySelectorAll("h5");
      let arrayTitoli = [];
      titoli.forEach((titolo) => {
        arrayTitoli.push(titolo.innerHTML);
      });
      console.log("ARRAY TITOLI: ", arrayTitoli);

      // **************** popolo l'alert ************************
      let alert = document.getElementById("alert");
      alert.innerHTML = `<ul class="list-group">
        <li class="list-group-item"><h4>Le mie canzoni preferite!❤️</h4></li>
        <li class="list-group-item">${arrayTitoli[0]}</li>
        <li class="list-group-item">${arrayTitoli[1]}</li>
        <li class="list-group-item">${arrayTitoli[2]}</li>
        <li class="list-group-item">${arrayTitoli[3]}</li>       
        </ul> <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>`;

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
      console.log("errore");
    }
  } catch (error) {
    console.log("errore di fetch -> catch", error);
  }
};

let fetchData2 = async function (b) {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${b}`
    );
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let jsonObject = Object.values(data);
      let jsonArray = Object.values(jsonObject[0]);
      /*  console.log("L'array è ", jsonArray); */
      // forEach sul nuovo array per vedere tutte le canzoni
      /* jsonArray.forEach((songs) => {
        console.log(
          "Nome canzone: ",
          songs.title,
          "Autore: ",
          songs.artist.name
        );
      }); */
      // ************* popolo sezione 2 ***************
      const prefSongDiv = document.getElementById("prefSong");
      prefSongDiv.innerHTML = `<div class="col mb-3 mb-sm-0"  >
      <div class="card text-center" >
            <img src="${jsonArray[0].album.cover_xl}" class="card-img-top rounded-top" alt="...">
        <div class="card-body">
            <h3 class="card-title">${jsonArray[0].title}</h3>
        </div>
        </div>
        </div>
        `;
    } else {
      console.log("errore");
    }
  } catch (error) {
    console.log("errore di fetch -> catch", error);
  }
};

let fetchData3 = async function (c) {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${c}`
    );
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let jsonObject = Object.values(data);
      let jsonArray = Object.values(jsonObject[0]);
      /*  console.log("L'array è ", jsonArray); */
      // forEach sul nuovo array per vedere tutte le canzoni
      /* jsonArray.forEach((songs) => {
        console.log(
          "Nome album: ",
          songs.album.title,
          "Autore: ",
          songs.album.title
        );
      }); */
      // ************* popolo sezione 3.1 ***************
      const albumCarousel1 = document.getElementById("albumCarousel1");
      albumCarousel1.innerHTML = `<img src="${jsonArray[0].album.cover_xl}" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h3>${jsonArray[0].album.title}</h3> <br/>
                <a href="https://api.deezer.com/album/212377/tracks" >
                  Tracklist
                </a>
              </div>
        `;
    } else {
      console.log("errore");
    }
  } catch (error) {
    console.log("errore di fetch -> catch", error);
  }
};

let fetchData4 = async function (d) {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${d}`
    );
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let jsonObject = Object.values(data);
      let jsonArray = Object.values(jsonObject[0]);
      /*  console.log("L'array è ", jsonArray); */
      // forEach sul nuovo array per vedere tutte le canzoni
      /* jsonArray.forEach((songs) => {
        console.log(
          "Nome album: ",
          songs.album.title,
          "Autore: ",
          songs.album.title
        );
      }); */
      // ************* popolo sezione 3.2 ***************
      const albumCarousel2 = document.getElementById("albumCarousel2");
      albumCarousel2.innerHTML = `<img src="${jsonArray[0].album.cover_xl}" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h3 class="text-bg-light">${jsonArray[0].album.title}</h3> <br/>
                <a class="text-light" href="https://api.deezer.com/album/212377/tracks" >
                  Tracklist
                </a>
              </div>
        `;
    } else {
      console.log("errore");
    }
  } catch (error) {
    console.log("errore di fetch -> catch", error);
  }
};

let fetchData5 = async function (e) {
  try {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${e}`
    );
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      let jsonObject = Object.values(data);
      let jsonArray = Object.values(jsonObject[0]);
      /*  console.log("L'array è ", jsonArray); */
      // forEach sul nuovo array per vedere tutte le canzoni
      /* jsonArray.forEach((songs) => {
        console.log(
          "Nome album: ",
          songs.album.title,
          "Autore: ",
          songs.album.title
        );
      }); */
      // ************* popolo sezione 3.2 ***************
      const albumCarousel3 = document.getElementById("albumCarousel3");
      albumCarousel3.innerHTML = `<img src="${jsonArray[1].album.cover_xl}" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h3 class="text-bg-dark" >${jsonArray[1].album.title}</h3> <br/>
                <a class="text-light" href="https://api.deezer.com/album/212377/tracks" >
                  Tracklist
                </a>
              </div>
        `;
    } else {
      console.log("errore");
    }
  } catch (error) {
    console.log("errore di fetch -> catch", error);
  }
};

fetchData("taylorswift"); //eseguo il fetch per la sez 1
fetchData2("jeremycamp"); //eseguo il fetch per la sez 2
fetchData3("metallica"); //eseguo il fetch per la sez 3.1
fetchData4("californication"); //eseguo il fetch per la sez 3.2
fetchData5("oasis"); //eseguo il fetch per la sez 3.3

// ******************** ALERT BUTTON ***********************

let mostraTitoli = () => {
  let alert = document.getElementById("alert");
  alert.classList.toggle("showMe");
};

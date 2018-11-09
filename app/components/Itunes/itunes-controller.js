import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  for (var i = 0; i < results.length; i++) {
    template += `
      <div class="col-4 pb-5">
        <div class="card d-flex justify-content-center">
          <img class="card-img-top" src="${results[i].albumArt}" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">${results[i].title}</p>
              <p class="card-text">${results[i].artist}</p>
              <p class="card-text">${results[i].collection}</p>
              <p class="card-text">${results[i].price}</p>
              <audio controls>
                  <source src="${results[i].preview}" type="audio/mpeg">
              </audio>
            </div>
        </div>
      </div>`
  }
  document.getElementById("songs").innerHTML = template;
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController
function onClick(e) {
  e.preventDefault();

  // setup URL
  let url = "https://pokeapi.co/api/v2/" + "pokemon" + "/" + "ditto/";
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      updateResult(json.name);
    });
}

function updateResult(info) {
  document.getElementById('results').textContent = info;
}

document.getElementById('test').addEventListener('click', onClick);

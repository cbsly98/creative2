function onClick(e) {
  e.preventDefault();

  let s = document.getElementById('selector');
  let type = s.options[s.selectedIndex].value;

  // setup URL
  let url = "https://official-joke-api.appspot.com/jokes/" + type + "/random";
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the joke API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      updateResult(json[0].setup);
      updatePunchline(json[0].punchline);
    });
}

function updateResult(info) {
  document.getElementById('joke').textContent = info;
}

function updatePunchline(info) {
  document.getElementById('punchline').style.visibility = "hidden";
  document.getElementById('punchline').textContent = info;
}

function show() {
  document.getElementById('punchline').style.visibility = "visible";
}

document.getElementById('getJoke').addEventListener('click', onClick);
document.getElementById('getPunchline').addEventListener('click', show);

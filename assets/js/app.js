const URL = 'https://pokeapi.co/api/v2/pokemon-form/';
const headers = new Headers();

for (let i = 1; i <= 500; i++) {
  fetch(URL + i, {
      method: 'GET',
      mode: 'cors',
      headers: headers,
      cache: 'default'
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      headers.append("Access-Control-Allow-Origin", URL)

      $('.loading').addClass('lds-ring')
      $('.pokemons').append(
        '<li class="card activator sticky-action">' + 
        '<img class="activator waves-effect waves-block waves-light" src="' + data.sprites.front_default + '"></img>' + 
        '<p align="center" class="card-action waves-effect waves-block waves-light" id="text">' + data.name + '</p>' +
        '<div class="card-reveal blue-grey darken-4">' +
        '<span class="card-title grey-text text-lighten-5">' + 'Description' + '<i class="fa fa-times"></i>' + '</span>' +
        '<img src="' + data.sprites.back_default + '" class="card-back"></img>' + 
        '<p>' + "Version: " + data.version_group.name + '</p>' +
        '</div>' +
        '</li>'
        )

      const li = document.getElementsByTagName('li')

      if (li.length >= 500) {
        $('.loading').removeClass('lds-ring')
      }
    }).catch(err => {
      console.error(err)
    })
}
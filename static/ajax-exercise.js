'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
  .then((response) => response.text())
  .then ((responseText) =>{
    document.querySelector('#fortune-text').innerHTML = responseText
  })
}
// $('#fortune-text').load('/fortune')
// }



document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.json?zipcode=${zipcode}`;
 
  
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) =>{
      document.querySelector('#weather-info').innerHTML = responseJson.forecast
      
    })
  }
  // TODO: request weather with that URL and show the forecast in #weather-info

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();
  const formInputs = {
    melon_type : document.querySelector('#melon-type-field').value,
    qty : document.querySelector('#qty-field').value
  }
  const url = '/order-melons.json'
  const params = {
    method:'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json'
    }
  } 
  fetch(url,params)
    .then ((response) => response.json())
    .then((responseJson) =>{
      if (responseJson.code ==='ERROR'){
        document.querySelector('#order-status').classList.add('order-error')
        document.querySelector('#order-status').innerHTML = responseJson.msg
      } else{
        document.querySelector('#order-status').classList.remove('order-error')
        document.querySelector('#order-status').innerHTML = responseJson.msg
      }
      
      
    })



  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);

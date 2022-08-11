const request = new XMLHttpRequest();
request.open('GET', 'https://catfact.ninja/facts', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(this.response);
    const fact1 = document.getElementById('fact1');
    const fact2 = document.getElementById('fact2');
    const fact3 = document.getElementById('fact3');
    fact1.textContent = data.data[0]['fact'];
    fact2.textContent = data.data[1]['fact'];
    fact3.textContent = data.data[2]['fact'];
  } else {
    console.log('Ha ocurrido un error' + request.status);
  }
}

request.send();



const request2 = new XMLHttpRequest();
request2.open('GET', 'https://catfact.ninja/breeds', true);

request2.onload = function () {
  if (request2.status >= 200 && request2.status < 400) {
    const breeds = JSON.parse(this.response);
    const tabla = document.getElementById('datos');
    breeds.data.forEach((breed) => {
      const columna = document.createElement('tr');
      tabla.appendChild(columna);
      const dato1 = document.createElement('td');
      dato1.textContent = breed.breed;
      columna.appendChild(dato1);
      const dato2 = document.createElement('td');
      dato2.textContent = breed.country;
      columna.appendChild(dato2);
      const dato3 = document.createElement('td');
      dato3.textContent = breed.origin;
      columna.appendChild(dato3);
      const dato4 = document.createElement('td');
      dato4.textContent = breed.coat;
      columna.appendChild(dato4);
      const dato5 = document.createElement('td');
      dato5.textContent = breed.pattern;
      columna.appendChild(dato5);
    });
  } else {
    console.log('Ha ocurrido un error' + request.status);
  }
}

request2.send();
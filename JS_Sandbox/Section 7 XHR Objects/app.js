document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create an XHR OBject
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

 //Optional - Use for sppiner/loaders
 xhr.onprogress = function(){
  console.log('READYSTATE', xhr.readyState);

 }

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);

    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);

  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function(){
    console.log('Request error..');
  }

  xhr.send();


  //readyState Values
  //0: request not initialized
  //1: server connection established
  //2: request received
  //3: processing request
  //4: request finished and response is reade


  //HTTP Statuses
  //200: OK
  //403: Forbbiden
  //404: Not Found
}
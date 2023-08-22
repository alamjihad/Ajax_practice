function loadData(){
  //create a new request
  const xhr = new XMLHttpRequest();
  //what to do when response arrives
  xhr.onload = function(){
    const container = document.getElementById('demo');
    container.innerHTML = this.responseText;
    //console.log(this.getAllResponseHeaders())
    console.log(this.getResponseHeader("etag"))
  };

//prepare request = methods: GET,POST,PUT,PATCH,DELETE
xhr.open("GET","./data/data.txt");


//send request
xhr.send();

}


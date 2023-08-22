function loadData(){
  //create a new request
  const xhr = new XMLHttpRequest();
  //what to do when response arrives
  xhr.onload = function(){
    console.log("Responsed finished");
    const container = document.getElementById('demo');
    container.innerHTML = this.responseText;
  };

//prepare request = methods: GET,POST,PUT,PATCH,DELETE
xhr.open("GET","./data/data.txt", false);


//send request
xhr.send();

console.log("Hello");

}


//what is "demo_get.asp"
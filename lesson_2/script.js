function loadData(myCallbackF){
  //create a new request
  const xhr = new XMLHttpRequest();
  //what to do when response arrives
  xhr.onload = function(){
    myCallbackF(this);
  }


//prepare request = methods: GET,POST,PUT,PATCH,DELETE
xhr.open("GET","./data/data.txt",);

  //add a request header
 // xhr.setRequestHeader("MY_GF","Javascript")

//send request
xhr.send();



}

function myCallback1(xhr){
  const container = document.getElementById("demo");
  container.innerHTML = xhr.responseText;
}

function myCallback2(xhr){
  const container = document.getElementById("demo2");
  container.innerHTML = xhr.responseText;
}
function loadData(){
  //create a new request
  const xhr =new XMLHttpRequest();
  //what to do when a request arrives
  xhr.onload =function(){
    const container =document.getElementById("demo");
    demo.innerHTML = this.responseText;
  };
  // prepare request = methods: GET,POST,PUT,PATCH,DELETE,OPTIONS
  xhr.open("GET","./javascript/data.txt");
 // xhr.setRequestHeader("My_friend","Miraj");
  //send request
  xhr.send();
  //abort
  //xhr.abort();
}
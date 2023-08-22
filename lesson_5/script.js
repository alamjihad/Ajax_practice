function sendRequest(method,url,data){
  const promise = new Promise((resolve,reject)  =>  {
    const xhr = new XMLHttpRequest();

    xhr.onload = function (){
      //hadle application error
      if (this.status >=400){
       reject('There is an application error and the response status is ${this.status} and response text is ${this.statusText}'); 
      }
      else{
      resolve(this.response);
      }
    };
    xhr.onerror = function (){
      reject("There is an error");
    };
  
    xhr.open("method","url")
    
    xhr.responseType ="json"
    xhr.send(data);
  });
  return promise;

}

function getData(){
 sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1").then(
  (responseData) => {
  console.log(responseData);
  }
 ).catch(err => {
  console.log(err);
 })
}
function sendData(){
  sendRequest("POST","https://jsonplaceholder.typicode.com/posts",
  JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  ).then(
    (responseData) => {
    console.log(responseData);
    }
   );
}


const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
// Counter code
var button = document.getElementById('counter');
button.onclick = function () {
    
  // Create a request object
  
  var request = new XMLHttpRequest();
  
  // Capture the response and store it in avariable
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        
        // Take some action
        if(request.status === 200){
            
           
        }
    } 
      // Not done yet
  };
  
  // Make the request 
  
  request.open('GET', 'http://tarunchadha.imad.hasura-app.io/counter', true);
  request.send(null);
};

// Submit name


var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
      // Create a request object
  
  var request = new XMLHttpRequest();
  
  // Capture the response and store it in avariable
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        
        // Take some action
        if(request.status === 200){
             var names = request.responseText;
             names = JSON.parse(names);
  var list = ''; 
  for (var i=0; i< names.length; i++) {
      list +='<li>' + names[i] + '</li>';
      
  }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;

            
        }
    } 
      // Not done yet
  };
  
  // Make the request 
  
  var nameInput = document.getElementById('name');
var name = nameInput.value;
  
  request.open('GET', 'http://tarunchadha.imad.hasura-app.iosubmit-name?name='+ name, true);
  request.send(null);
  // Make a request to the server and send the name
  // Capture a list of names and render it as a list 
  
 
};

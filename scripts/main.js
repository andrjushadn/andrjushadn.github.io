var myImage = document.querySelector('img');//сохраняем ссылку на элемент в переменной

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute ('src','images/another-key.png');
    } else {
      myImage.setAttribute ('src','images/logo.png');
    }//создали обработчик onclick, которые проверяет то, что проверяет
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Chrome is cool, ' + myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}
else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Chrome is cool, '+ storedName;
}
myButton.onclick = function(){
	setUserName();
}
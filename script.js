function allowDrop(even) {
        even.preventDefault();
    }
 
    function drag(even) {
        even.dataTransfer.setData("text", even.target.id);
    }
 
    function drop(even) {
        even.preventDefault();
        var fetchData = even.dataTransfer.getData("text");
        even.target.appendChild(document.getElementById(fetchData));
    }


var passwords = ['2139', '5492', '3971', '7861', '7834', '9026', '1639', '5829', '7451', '5839', '1032', '7354', '6023'];

function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

document.querySelector('.password').innerHTML = passwords[randomNumber(0, passwords.length)];
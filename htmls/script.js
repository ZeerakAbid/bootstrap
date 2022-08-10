let helloBtn = document.querySelector(".test-btn");
helloBtn.addEventListener('click' ,showMsg);


function showMsg(){
    alert("welcome");
} 


let nameBtn = document.querySelector(".name-btn");
nameBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name = prompt('enter your name'); 
    nameBtn.textContent = 'Your Name:' + name;
}


var nam = prompt("what you name?");
    alert (`Have a Good Day Sir ${nam}!`)
  var time = prompt("Whats The Time: ");
    if (time >= 5 && time < 12) {
      alert("good morning");
    }
    else if (time >= 12 && time < 17) {
        alert("Good Afternoon") 
    }
    else if (time >= 17 && time <21) {
        alert("good evening");
    }
    else {
     alert("Good Night");
    }


    for( let i=0; i<3;i++){ 
   var producttype = prompt("How Can We Help?")
   switch (producttype) {
    case 'keyboard':
        alert('Razer Gaming Keyboard');
        break;
    case  'mouse':
        alert('Glorious Model O');
        break;
    case 'Monitor':
        alert('Samsung Odessy G9 Ultra Wide 49 inchs');
        break;
    case 'laptop':
        alert('Dell Latitude E7450');
        break;
    case 'bag':
        alert('HP laptop bag');   
        break; 
    default:
        alert(`${producttype} not Available`)  
   }
   alert("any thing else???")
   }
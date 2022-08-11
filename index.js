//we fetch all the buttons present on the page
var buttons = document.querySelectorAll(".drum");

//here we add an event listenner to each button in order to make them do something when they are clicked
for (let index = 0; index < buttons.length; index++) {
    
    buttons[index].addEventListener("click",function () { 
    //Just to make it easier to read, we put the actual button selected into a variable
    var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

    
    
}

//We also wannad detect if the user pressed the key displayed on the different instrument, if the 
//key corresponds to one written, then we display the corresponding song
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


//depending of the keyvalue activated by the user, a sond will be displayed
function makeSound(key){
    switch (key) {

        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default:
        console.log(key);
        break;
}
}

function buttonAnimation(key){

    var buttonSelected = document.querySelector("."+key);
    

    buttonSelected.classList.add("pressed");
    setTimeout(function(){buttonSelected.classList.remove("pressed");},200);
    
}
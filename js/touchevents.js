var myGesturePad = document.getElementById('myGesturePad')

var originX = 0;
var finalX = 0;

myGesturePad.addEventListener('touchstart', function(event){
    myGesturePad.textContent = event.type + " gesture detected"
    originX = event.touches[0].pageX
})

myGesturePad.addEventListener('touchmove', function(event){
    myGesturePad.textContent = event.type + " gesture detected"
    finalX = event.touches[0].pageX
})

myGesturePad.addEventListener('touchend', function(event){
    if(originX < finalX){
        myGesturePad.textContent = "swiperight gesture detected"
        
    }

    if(originX > finalX){
        myGesturePad.textContent = "swipeleft gesture detected"
        
    }
})
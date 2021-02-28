
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
console.log(perimeter);
circle.setAttribute('stroke-dasharray', perimeter)

let currentOffset = 0;
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        console.log("times ticking")
    circle.setAttribute("stroke-dashoffset", perimeter * timeRemaining/duration - perimeter);
    },
    onComplete(){

    }
});

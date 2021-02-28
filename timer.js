class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick()  //starts execution straight away, without waiting for 1sec to start
        this.interval =  setInterval(this.tick, 50); //sets interval every second
    }
    pause = () => {
        clearInterval(this.interval)
    }
    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                console.log("Timer completed")
            }
            alert ("Time stopped");
        } else {
            this.timeRemaining = this.timeRemaining - 0.05;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
     
      
    }
    get timeRemaining(){
        return parseFloat(this.durationInput.value); //getter 
    }
    set timeRemaining(time){
    this.durationInput.value = time.toFixed(2);  //setter
    }

    
}
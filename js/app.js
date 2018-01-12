/* 
Time Class
    # Date
    # Hour
    # Min
    # Sec
    - secondIncrement
    - minIncrement
    - hourIncrement
*/
class Time
{
    constructor()
    {
        this.$element = document.querySelector('.time');
        this.fetchDate();
        setInterval(() => { 
            this.fetchDate()
        },60000);
        this.secondIncrement();
    }
    
    fetchDate()
    {
        
         this.date = new Date();
         this.hours = this.date.getHours();
         this.minutes = this.date.getMinutes();
         this.seconds = this.date.getSeconds();
         this.displayTime();
       
    }
    
    secondIncrement()
    {
        setInterval(() => {
            if(this.seconds >= 60){
                this.seconds = 0;
                this.minuteIncrement();
            }
            this.seconds++;
        },1000);
    }
    
    minuteIncrement()
    {
        if (this.minutes >= 60){
            this.minutes = 0;
            this.hourIncrement();
        }
        this.minutes++;
        this.displayTime();
    }
    
    hourIncrement(){
        if(this.hours >= 24){
            this.hours = 0;
        }
        this.hours++;
    }
    
    displayTime(){
        this.$element.innerHTML = `${this.hours}:${this.minutes}`
    }
}

class Todo {
    constructor() {
        this.$input = document.querySelector('.todo');
        this.$list = document.querySelector('.todo-list');
        this.index = 0;
        this.todo = {};
        this.$input.onkeyup = (event) => {
            if(event.key === "Enter"){
                this.addLi();
           
            }
        }
    }
    
    createLi(input) {
        const li = document.createElement('li');
        li.setAttribute('class',"todo-item");
        li.setAttribute('data-id',`${this.index}`);
        li.innerHTML = `
            <div>
                <div class="todo-title">
                  ${input}
                </div>
                <div class="todo-button pull-right hover-light">
                <i class="fa fa-trash-o"> </i>

                </div>
                <div class="todo-button pull-right hover-light">
                <i class="fa fa-check"> </i>

                </div>
            </div>
` 
        return li;
    }
    
    addLi() {
        const input = this.$input.value;
        const $li = this.createLi(input);
        this.todo[this.index] = $li;
        this.$list.appendChild($li);
    }
}
new Time();
new Todo();
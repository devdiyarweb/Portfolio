window.addEventListener('DOMContentLoaded', () => {
    const digitClock = new BlockClocks(".clock") 
});

class BlockClocks {
    constructor(options) {
        this.element = document.querySelector(options)
        this.time = { a:[], b:[] };
        this.rollClass = "clock__block--bounce";
        this.digitsTimeout = null;
        this.rollTimeout = null;
        this.mod = 0
        this.loop();
    }

    animateDigits(){
        const groups = this.element.querySelectorAll("[data-time-group]");

        Array.from(groups).forEach((group, i) => {
            const { a, b } = this.time;
            
            if (a[i] !== b[i]) group.classList.add(this.rollClass)
        })

        clearTimeout(this.rollTimeout);
        this.rollTimeout = setTimeout(this.removeAnimations.bind(this),900);
    }

    displayTime(){
        // screen reader time
        const timeDigits = [...this.time.b];
        const ap = timeDigits.pop();

        this.element.ariaLabel = `${timeDigits.join(":")} ${ap}`;

        //displayed time
        Object.keys(this.time).forEach(letter => {
            const letterEls  = this.element.querySelectorAll(`[data-time="${letter}"]`);

            Array.from(letterEls).forEach((el,i) => {
                el.textContent = this.time[letter][i];
            });
        });
    }
    
    loop(){
        this.updateTime()
        this.displayTime();
        this.animateDigits();
        this.tick()
    }

    removeAnimations(){
        const groups = this.element.querySelectorAll("[data-time-group]");


        Array.from(groups).forEach(group => {
            group.classList.remove(this.rollClass)
        });
    }

    tick(){
        clearTimeout(this.digitsTimeout);
        this.digitsTimeout = setTimeout(this.loop.bind(this), 1e3);
    }

    updateTime(){
        const rawDate = new Date();
        const date = new Date(Math.ceil(rawDate.getTime() / 1e3) * 1e3 + this.mod);
        let hours = date.getHours();
        const minut = date.getMinutes();
        const seconds = date.getSeconds();
        const ap = hours < 12 ? "AM" : "PM";


        if(hours == 0) hours = 12;
        if(hours > 12) hours -=12;

        this.time.a = [...this.time.b]
        this.time.b = [
            (hours < 10 ? `0${hours}` : `${hours}`),
            (minut < 10 ? `0${minut}` : `${minut}`),
            (seconds < 10 ? `0${seconds}` : `${seconds}`),
            ap
        ];
        if (!this.time.a.length) this.time.a = [...this.time.b]; 
    }
}


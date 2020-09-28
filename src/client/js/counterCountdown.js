    // Calculate Countdown

    export function counter (traveldate) {
        
        var oneDay = 24*60*60*1000;
        const d = new Date();
        const today = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
        const countdown = Math.round(Math.abs((today.getTime() - traveldate.getTime())/(oneDay))); 
        return countdown
    }
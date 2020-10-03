    // Calculate Countdown

    export function counter (traveldate) {
        
        var oneDay = 24*60*60*1000;
        const d = new Date();
        const today = Date.now(d); 
        console.log(today); 
        const travelDate = Date.parse(traveldate); 
        console.log(travelDate); 
        const diffMili = travelDate - today
        const countdown = Math.round(diffMili/oneDay); 
        return countdown;
    }
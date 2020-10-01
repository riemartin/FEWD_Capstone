    // Calculate Countdown

    export function counter (traveldate) {
        
        var oneDay = 24*60*60*1000;
        const d = new Date();
        const today = Date.parse(d); 
        const travelDate = Date.parse(traveldate); 
        const diffMili = travelDate - today
        const countdown = Math.round(diffMili/oneDay); 
        return countdown;
    }
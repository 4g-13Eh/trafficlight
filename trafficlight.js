'use strict';

function trafficLight(color){
    switch(color){
        case undefined:
            return 'OUT OF ORDER';
        case 'red':
            return `DON'T WALK!`;
        case 'green':
            return `WALK!`;
        case 'orange':
            return `ATTENTION!`;
    }
}

module.exports = {
    trafficLight
}

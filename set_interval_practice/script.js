function setTimeoutInRange(callback, min, max) {
    const randomTime = getRandomInt(min,max);
    setTimeout(()=>{
        callback()
    },randomTime)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const t1= performance.now();

setTimeoutInRange((executionTime) => {
    const t2 = performance.now();
    console.log('Time execution', t2-t1, 'ms') // some time from 1000 to 3000 ms
}, 1000, 3000);
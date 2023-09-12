/** Returns a random element from given Array
 * 
 * @param {Array} array
 * @returns {Number}*/
function getRandomFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomNumber = array[randomIndex];
    return randomNumber;
};

async function sleep(mlSeconds) {
    return new Promise(resolve => setTimeout(resolve, mlSeconds));
};
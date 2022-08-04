const nFactor = (n) => {
    const numbers = [];
    for (let i = 1; i <= n; i += 1) {
        numbers.push(i);
    }
    return numbers.reduce((a,b) => a * b);
}

console.log(nFactor(5));

const biggestWord = (str) => {
    const splitStr  = str.split(' ');
    let bigWord = '';
    for (let i = 0; i < splitStr.length; i += 1) {
        if (splitStr[i].length > bigWord.length) {
            bigWord = splitStr[i];
        }
    }
    return bigWord;
}

console.log(biggestWord('A vaca do maluco pastor '));


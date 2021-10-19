// exercicio 1

function palindrome (string) {
    let inverse = string.split('').reverse().join('');
    if (string === inverse) {
        return true
    } else {
        return false;
    }
}

console.log(  palindrome('bab')   )

// exercicio 2

function biggestInteger(array) {
    let result = 0;
    for(let i=0; i < array.length; i += 1) {
        if (array[i] > result) {
            result = array[i]
        }
    }

    return array.indexOf(result);
}

console.log(biggestInteger([5,20]))

// exercicio 3

function smallestInteger(array) {
    let result = array[0];
    for(let i=1; i < array.length; i += 1) {
        if (array[i] < result) {
            result = array[i];
        }
    }
    
    return array.indexOf(result);
}

console.log(smallestInteger([5,3,4,6,2]))

// exercicio 4

function biggestWord(array) {
    let result = array[0];
    for (let i=1; i < array.length; i += 1) {
        if (array[i].length > result.length) {
            result = array[i]
        }
    }

    return result;

}

console.log(biggestWord(['Fabio', 'Jorge', 'Fernando']))

// exercicio 5

let container = [2,2,3,3,5,5,5,5]

function mostRepeated(array) {
    let maxNum = 0;
    let counter = 0;

    for (let i=0; i < array.length; i += 1) {
        if (maxNum < array[i]) {
            maxNum = array[i]
        }
    }

    for (let i=0; i < array.length; i += 1) {
        if (maxNum === array[i]) {
            counter++
        }
    }

    return counter;
}

console.log(   mostRepeated(container)   )

// exercicio 6

function sum (n) {
    let result = 0;
    for (let i=1; i <= n; i+=1) {
        result += i;
    }

    return result;

}

console.log(sum(5))

// exercicio 7 

function sentence (word, ending) {
    let splitWord = word.split('')
    let container = [];
    
    for(let i=word.length - ending.length; i < word.length; i++) {
        container.push(word[i]);
    }

    if(container.join('') === ending) {
        return true;
    } else {
        return false;
    }

}

console.log(sentence('fernando', 'nando'))
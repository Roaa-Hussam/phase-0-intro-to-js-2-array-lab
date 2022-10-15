

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}


function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}


function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}


function appendCat(name) {
    const arr = [...cats];
    arr.push(name);
    return (arr);
}


function prependCat(name) {
    const arr = [...cats];
    arr.unshift(name);
    return (arr);
}


function removeLastCat() {
    const arr = [...cats];
    arr.pop();
    return (arr);
}


function removeFirstCat() {
    const arr = [...cats];
    arr.shift();
    return (arr);
}















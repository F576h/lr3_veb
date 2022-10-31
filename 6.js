function findVowels(message) {
    let mess = String(message).toLowerCase();
    return (mess.match(/[aeiou]/g) || []).length ;
}

console.log(findVowels('hello') );
console.log(findVowels('why') );
console.log(findVowels('dfdfjkgfk') );
console.log(findVowels('oooo') );
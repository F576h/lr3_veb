function palindrome(message) {
    let mess = String(message).toLowerCase();
    //split () разбивает (делит) строку на две или более подстроки
    //join () позволяет преобразовать и объединить все элементы массива в одно строковое значение
    if (mess == mess.split("").reverse().join("")) {
        return true;
    }
    return false;
}

console.log(palindrome('Anna') === true);
console.log(palindrome(',Anna,') === true);
console.log(palindrome('Evil o live') === true);
console.log(palindrome('I did , did I') === true);

console.log(palindrome("Don't nod") === false);
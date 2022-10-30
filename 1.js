function checkSpam(str){
    let mess = str.toLowerCase(); //переводим весь текст в нижний регистр
    //проверяем на наличие в тексте нужных символов
    if( mess.includes('viagra') || mess.includes('xxx')){ 
        return true; //если нужное есть выводим тру
    }
    return false; //нужного нет выводим фолс
}

console.log(checkSpam("ViaGra") == true);
console.log(checkSpam("xXx") == true);
console.log(checkSpam("totally not viagra") == true);
console.log(checkSpam("cops") == false);
console.log(checkSpam("cops") == true);
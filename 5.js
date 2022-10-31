function Fizzbuzz(x) {
    for (let i = 1, mess = ""; i <= x; i++, mess = "") {
        //если кратно 3 и 5
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }
        //если кратно 3
        if (i % 3 == 0) {
            mess = "fizz";
        }
        //если кратно 5
        if (i % 5 == 0) {
            mess = mess + "buzz";
        }
       if (mess.length == 0) {
            mess = String(i);
        }
        console.log(mess);
    }
}

Fizzbuzz(16);


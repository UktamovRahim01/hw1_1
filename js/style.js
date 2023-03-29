let Day = +prompt("Ведите дату?");

if (Day >= 1 && Day < 11) {
    alert("Первая декада");
}
else if (Day >= 11 && Day < 21) {
    alert("Вторая декада");
}
else if (Day >= 21 && Day <= 31) {
    alert("Третья декада");
}
else {
    alert("Нету такого дня(числа) в месяце")
}



let money = 10000
let acc = 77777

let name_1 = prompt(`ведите логин`)

if (name_1 === `Alex`) {
    let account = prompt(`ведите номер счета`)
    if (account == acc) {
        alert(`на счету = ` + money);
        let bnm = prompt(`сколько обналичить`)
        if (bnm > money) {
            alert(`на вашем счету недостаточно средств`);
        }
        else if (bnm < 0) {
            alert(`вы не самый умный`);
        }
        else {
            console.log(`вы сняли - ` + bnm);
            console.log(`осталось - ` + (money - bnm));
        }
    }
    else {
        alert(`счет не найден`);
    }
}
else {
    alert(`счет не найден`);
}






// ввод имени
let name = prompt(`ведите имя`);
// начала условия
if (name[0] === `A` || name[0] === `a`) {
    // ввод возраста и баланса
    let age = prompt(`ведите возраст`);
    if (age >= 20 && age < 40) {
        let money = prompt(`сколько у вас с собой`);
        if (money >= 100) {
            // запрос количества людей
            let num = prompt(`сколько вас в группе`);
            if (num < 10) {
                // полажительный ответ
                confirm.log(`добро пажаловать`);
            }
            // альтернатива
            else {
                // отрицательный ответ
                confirm.log(`вас слишком много`);
            }
        }
        // альтернатива
        else {
            // отрицательный ответ
            confirm.log(`вы не проходите`);
        }
    } else {
        // отрицательный ответ
        confirm.log(`вы не проходите`);

    }
}
// альтернатива
else {
    // отрицательный ответ
    confirm(`вы не проходите`);
}


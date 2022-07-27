function even_or_odd(number) {
    return number % 2 === 0 ? "Odd" : "Even"
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generator() {
    const myPromise = new Promise((resolve, reject) => {
        let result = random(1, 100);
        let result2 = even_or_odd(result);
        if (result2 === "Odd") {
            resolve("Завершено успешно. Сгенерированное число — " + result);
        } else {
            reject("Завершено с ошибкой. Сгенерированное число — " + result);
        }
    })

    myPromise
        .then((result) => {
            console.log('Успех', result);
        })
        .catch((error) => {
            console.log('Ошибка', error);
        })
        .finally(() => {
            console.log('Код выполнился');
        });
}

setTimeout(generator, 3000);

console.log("3 секунды до выполнения кода");

document.getElementsByClassName
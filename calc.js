function sumInput() {
    let numbers = [];

    while (true) {

        let value = +prompt("Введите число", '');

        if (!value) break; // (*)
        numbers.push(value);
    }
    numbers.sort();
    alert(numbers);
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput());
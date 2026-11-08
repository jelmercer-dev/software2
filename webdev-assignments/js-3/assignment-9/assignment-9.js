function even(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 ==0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

let array = [1, 2, 3, 4, 5, 6];

console.log(array);
console.log(even(array));
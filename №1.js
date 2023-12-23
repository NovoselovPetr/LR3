alert(`
Программа для решения задачи "Даны целые числа К, N и набор из N целых чисел. 
Если в наборе имеются числа, меньшие К, то вывести TRUE; в противном случае вывести FALSE".
    `);
let K = Number(prompt("Введите число K:"));
let N = Number(prompt("Введите число N:"));
let array = prompt("Введите N целых чисел через пробел:");
array = array.split(" ");

let answer = "FALSE";
for (let i = 0; i < N; i++) {
    if (array[i] < K) {
        answer = "TRUE";
    }
}
alert("При K = " + K + ", N = " + N + ", набор = " + array + "\nОтвет: " + answer);


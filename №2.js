alert(`
Программа для решения задачи "Дано целое число N (> 0). Найти сумму 1 + 1/2 + 1/3 +...+ 1/N (вещественное число)".
    `);
let N = Number(prompt("Введите число N:"));
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += 1/i;
}

alert("При N = " + N +"\nОтвет: " + sum);
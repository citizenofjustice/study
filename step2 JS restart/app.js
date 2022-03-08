const num = 42; //целое число
const float = 42.42; //десятичное число
const pow = 10e3;
console.log(pow);
console.log('Максимальный int', Number.MAX_SAFE_INTEGER);
console.log('Math.pow', Math.pow(2, 53)-1);
console.log('Минимальный int', Number.MIN_SAFE_INTEGER);
console.log('Максимальный значение', Number.MAX_VALUE);
console.log('Минимальное значение', Number.MIN_VALUE);
console.log('+ бесконечность', Number.POSITIVE_INFINITY, '2/0', 2/0);
console.log('NaN', 0/'string') //Not a number
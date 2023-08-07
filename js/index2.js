let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positiveNumber = 0;
let count = 0;
let minIndex = 0;
let maxIndex = 0;
let negativeCount = 0;
let countOddPositive = 0;
let countPariedPositive = 0;
let sumPariedPositive = 0;
let sumOddPositive = 0;
let productOfPositive = 1;
let maxElement = Math.max(...arr);

for(let i = 0; i < arr.length; i++){
    if(arr[i]>0){
        positiveNumber += arr[i];
        count ++;
        productOfPositive *= arr[i];
    }
    if(arr[i]<arr[minIndex]){
        minIndex = i
    }
    if(arr[i]>arr[maxIndex]){
        maxIndex = i
    }
    if(arr[i]<0){
        negativeCount ++
    }
    if(arr[i] > 0 && arr[i] % 2 !== 0){
        countOddPositive ++;
        sumOddPositive += arr[i];
    }
    if(arr[i] > 0 && arr[i] % 2 == 0){
        countPariedPositive ++;
        sumPariedPositive += arr[i];
    }
    if (arr[i] !== maxElement) {
        arr[i] = 0;
    }
}

console.log('Cумма позитивных чисел', positiveNumber);
console.log('Кооличество позитивных чисел', count);
console.log('Минимальное число',arr[minIndex]);
console.log('Порядковый номер минимального числа', minIndex + 1);
console.log('Максимальне число',arr[maxIndex]);
console.log('Порядковый номер максимального числа', maxIndex + 1);
console.log('Количество негативных чисел',negativeCount);
console.log('Количество не парных позитивных чисел', countOddPositive);
console.log('Количество парных позитивных чисел', countPariedPositive);
console.log('Cумма парных позитивных чисел', sumPariedPositive);
console.log('Cумма не парных позитивных чисел', sumOddPositive);
console.log('Произведение позитивных елементов', productOfPositive);
console.log('Массив после обнуление остальных елементов', maxElement);
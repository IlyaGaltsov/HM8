let lenght = parseInt(prompt('Ведите длину массива'));
let array = [];
for(let i = 0; i < lenght; i++){
    let element = parseInt(prompt('Ведите елемент' + (i + 1) + ":"));
    array.push(element);
};

array.sort(function(a,b){
    return a-b;
});

console.log('Начальный массив', array);

array.splice(1, 3);

console.log("Массив после удаление елементов со 2 по 4:", array);
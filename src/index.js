'use strict';

let num = prompt('Введите число от 0-7 согласно вашему уровню прав в ОС Linux');
switch (num){
  case '0':
    console.log(`${num} У вас нет прав, совсем`);
    break;
  case '1':
    console.log(`${num} Разрешено только выполнение файла`);
    break;
  case '2':
    console.log(`${num} Разрешена только запись и изменение файла`);
    break;
  case '3':
    console.log(`${num} Разрешено изменение и выполнение`);
    break;
  case '4':
    console.log(`${num} Права только на чтение`);
    break;
  case '5':
    console.log(`${num} Только чтение и выполнение, без права на запись`);
    break;
  case '6':
    console.log(`${num} Права на чтение и запись, но без выполнения`);
    break;
  case '7':
    console.log(`${num} У вас имеются все права`);
    break;
default: console.log(`${num} Вы ввели неправильное значение`);
}
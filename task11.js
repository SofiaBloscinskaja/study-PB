// Тема 11
/* Что выведет код нижче 
alert( 1 && null && 2 ); - null
alert( alert(1) && alert(2) ); - 1 и undefined
alert( null || 2 && 3 || 4 ); - 3
Проверка значения из диапазона
if (age >= 14 && age <= 90)
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
if (age < 14 || age > 90)
if (!(age >= 14 && age <= 90))
Какие из перечисленных ниже alert выполнятся?
if (-1 || 0) alert( 'first' ); //выполнится
if (-1 && 0) alert( 'second' ); // не выполнится
if (null || -1 && 1) alert( 'third' ); // выполнится
Задача Проверка логина
let name = prompt("Кто там?", '');

if (name == 'Админ') {

  let password = prompt('Введите пароль?', '');

  if (password == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (password == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (name == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
*/
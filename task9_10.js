//Тема 9
/*  Задача спросить и вывести имя
let name = prompt('Как Вас зовут?', 'Имя');
alert(`Вас зовут ${name}`);

//Тема10
//Задача 1
Выведется ли alert?
if ("0") {
  alert( 'Привет' ); //Выведется
  //


  Задача 2 Оф название JS
  let name = prompt('Какое "официальное" название JavaScript?', '')

  if(name==='ECMAScript') {
      alert('Правильно!')
  }
  else { alert('Не знаете? ECMAScript!') } */

  //Задача 3 
  //Покажите знак числа

 /* let value = prompt('Введите число', '')

  if (value > 0) {
      alert ('1')

  }
  else if (value<0) {
      alert ('-1')
    }
  else {
    alert ('0')

  }
  */
  //Задача 4
//Перепишите if с использованием условного оператора '?':

//result =(a + b < 4) ? 'Мало' : 'Много';

//Задача5
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ?  'Нет логина' : ''

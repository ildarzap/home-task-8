// 1. Создайте две переменные `firstName` и  `lastName` со значениями вашего имени и фамилии, а также переменную `age` с вашим возрастом. Используйте интерполяцию строк, чтобы вывести в консоль сообщение вида:
//     `Меня зовут ***Султан Амангельдиев***, и мне ***30*** лет`

const firstName = 'Ildar';
const lastName = 'Zapparov';
const age = '23';
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age}`);

// 2. Создайте переменную `city` с названием вашего города. Выведите в консоль сообщение без использования интерполяции строк `(не используйте `text ${variable}`)

const city = 'Караганда';
console.log('Я родом из города' + ' ' + city);

// 3. Создайте переменную password и присвойте ей произвольное строковое значение. Затем создайте переменную hasAccess, которая будет хранить логическое значение: true, если password не пустая строка, и false, если строка пуста. Выведите в консоль значения обеих переменных.

const password = '123';
const hasAccess = password ? true : false;
console.log(password, hasAccess);

// Создайте переменную isMember со значением false. Преобразуйте её в строку с помощью метода toString() и выведите результат в консоль значение и тип данных этой переменной.

const isMember = false;
const isMemberToString = isMember.toString();
console.log(isMemberToString, typeof isMemberToString);

// Создайте переменную cartItems cо значением 0. Преобразуйте её в логическое значение, чтобы проверить, пустая корзина или нет. Выведите результат в консоль и объясните, почему корзина считается пустой или нет.

const cartItems = 0;
const cartItemsToBoolean = Boolean(cartItems);
console.log(cartItemsToBoolean);
// 0 - false

// Создайте переменную averageScore и присвойте ей значение 89.75695. Затем переопределите значение этой переменной, округлив число до одного знака после запятой и выведите ее в консоль.

const averageScore = 89.75695;
const averageScoreRounded = averageScore.toFixed(1);
console.log(averageScoreRounded);

// 7. Создайте переменную `greetingMessage` со значением `"      Приветствуем вас в мире программирования!        "`.
//     - Удалите пробелы в начале и в конце строки.
//     - Преобразуйте строку в верхний регистр.
//     - Проверьте, содержит ли строка слова `"программирования"`.
//     - Выведите результаты каждого шага в консоль.

const greetingMessage = '      Приветствуем вас в мире программирования!        ';
const greetingMessageTrimmed = greetingMessage.trim();
console.log(greetingMessageTrimmed);
const greetingMessageUppercase = greetingMessageTrimmed.toUpperCase();
console.log(greetingMessageUppercase);
const greetingMessageIncludes = greetingMessageUppercase.includes('программирования');
console.log(greetingMessageIncludes);

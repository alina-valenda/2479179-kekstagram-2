// Функция для создания массива из 25 объектов с описанием фотографий
function generatePhotos() {
  // Создаем массив для хранения объектов
  const photos = [];

  // Определяем массив случайных имен для комментариев
  const names = ['Анна', 'Максим', 'Елена', 'Иван', 'Ольга', 'Артем', 'Дарья', 'Алексей', 'София', 'Николай'];

  // Определяем массив возможных сообщений для комментариев
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  // Создаем функцию для получения случайного числа в заданном диапазоне
  function getRandomNumber(min, max) {
    // Генерируем случайное число между min и max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Создаем функцию для генерации случайного комментария
  function generateComment(commentId) {
    // Выбираем случайное имя из массива names
    const name = names[getRandomNumber(0, names.length - 1)];

    // Выбираем одно или два случайных сообщения из массива messages
    const message =
      messages[getRandomNumber(0, messages.length - 1)] +
      (Math.random() > 0.5 ? ` ${messages[getRandomNumber(0, messages.length - 1)]}` : '');

    // Генерируем случайный номер для аватара (от 1 до 6)
    const avatarNumber = getRandomNumber(1, 6);

    // Возвращаем объект комментария
    return {
      id: commentId, // Уникальный идентификатор комментария
      avatar: `img/avatar-${avatarNumber}.svg`, // Генерируем ссылку на аватар
      message, // Генерируем текст сообщения
      name, // Генерируем имя автора комментария
    };
  }

  // Генерация массива фотографий
  for (let i = 1; i <= 25; i++) {
    // Генерируем случайное количество лайков
    const likes = getRandomNumber(15, 200);

    // Генерируем случайное количество комментариев
    const commentsCount = getRandomNumber(0, 30);

    // Генерируем уникальные идентификаторы для комментариев
    const comments = Array.from({ length: commentsCount }, (_, index) =>
      generateComment(i * 1000 + index) // Уникальный ID для комментария
    );

    // Создаем объект фотографии
    const photo = {
      id: i, // Уникальный идентификатор фотографии
      url: `photos/${i}.jpg`, // Ссылка на изображение
      description: `Описание фотографии номер ${i}`, // Описание фотографии
      likes, // Количество лайков
      comments, // Массив комментариев
    };

    // Добавляем объект в массив
    photos.push(photo);
  }

  // Возвращаем массив фотографий
  return photos;
}

// Вызываем функцию для генерации массива и выводим результат в консоль
const generatedPhotos = generatePhotos();
console.log(generatedPhotos);

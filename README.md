# Инициализация и первичная настройка проекта

## Создание файловой структуры

Наше приложение будет состоять из ES6 (в дальнейшем TypeScript) модулей. На первом этапе весь код будет помещен в один файл. В последующем мы разделим его на модули. Для сборки модулей понадобится система сборки — webpack. Исходники будут находиться в директории `source`, а собранный из этих модулей файл приложения будет помещаться в директорию `dist`.

Статичные файлы временно поместим в директорию `assets`, в соответсвующие подразделы.

## Точка входа в приложение

Откроем файл `index.html`. Углубляться в структуру не будем, кратко пробежим по основным тегам.

```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Diary</title>

    <link rel="stylesheet" href="assets/styles/index.css">
  </head>

  <body>
    <h1>Hello world!</h1>
    <script src="source/app.js"></script>
  </body>

</html>
```

Здесь мы подключили скрипт приложения, в котором пока будет находиться весь JavaScript код. Также файл стилей.

Про метаданные, используемые в приложении можно почитать [тут](https://tproger.ru/translations/meta-tags-2017/).

## Инициализация [npm](https://www.npmjs.com/)

Чтобы не скачивать все сторонние библиотеки, плагины для систем сборки и прочее руками, будем использовать npm — node package manager.
Для инициализации необходимо, чтобы был установлен [NodeJS](https://nodejs.org/en/).
Вся информация о нашем проекте будет храниться в файле `package.json`. Для его создания необходимо ввести команду:

```ShellSession
npm init
```

После чего ответить на вопросы, касаемые нашего проекта.

## Инициализация и настройка таск менеджера [gulp](https://gulpjs.com/)

Для облегчения рутинных задач будем использовать менеджер задач gulp версии 4+.
Т.к. релизной является более младшая версия, установка будет носить слегка необычный характер.

```ShellSession
// Установка gulp-cli глобально
npm install gulpjs/gulp-cli -g

// Установка gulp локально в наш проект.
npm install gulpjs/gulp#4.0 --save-dev
```

Пакет gulpjs и все его зависимости установятся в директорию node_modules.
Флаг --save-dev означает, что пакет установится и информация о нем запишется в наш package.json. Делается это для того, чтобы не добавлять файлы всех сторонних зависимостей в наш репозиторий, а просто иметь информацию о них в проекте и по надобности скачивать с помощью npm. Если будет нужно полностью заново скачать наш проект с репозитория, то для скачивания всех нужных зависимостей нужно будет просто выполнить `npm i` (`npm install`).

### Создание gulpfile

Все задачи gulp будет брать из файла `gulpfile.js`. Заимпортируем модуль gulp и запишем его в константу, для дальнейшего использования.

```JavaScript
const gulp = require('gulp')
```

## Запуск приложения и локальный сервер

Для того, чтобы легко просматривать наше приложение в статическом виде, пока нет серверной части, будем использовать модуль gulp-serve. Для его установки выполним `npm i --save-dev gulp-serve`.

Далее добавим следующий код в наш gulpfile.js:

```JavaScript
const gulpServe = require('gulp-serve')

gulp.task('serve', gulpServe({
  root: [__dirname]
}))
```

Глобальная переменная `__dirname` указывает на текщую директорию. Таким образом сервер запустится в нашей директории и точкой входа по дефолту будет наш файл index.html.

Вот так будет выглядеть раздел devDependencies нашего package.json файла:

```JSON
"devDependencies": {
  "gulp": "github:gulpjs/gulp#4.0",
  "gulp-serve": "^1.4.0"
}
```

После чего запустим команду `gulp serve` и перейдем в браузер по адресу [http://127.0.0.1:3000/](http://127.0.0.1:3000/).

Наше приложение запущено. На этом наш вводный урок окончен.

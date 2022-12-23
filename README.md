# Modesto Flowers
![Modesto Flowers](/src/img/logo.svg)

## Коротко о проекте
Для реализации проекта я использовал Gulp, который самостоятельно конвертирует и подключает шрифты, а также записывает подключение в файл стилей. Обновляет браузер. Собирает в один несколько HTML файлов. Работает с CSS препроцессорами, например SASS(SCSS) и оптимизирует их. Не только сжимает изображения но и конвертирует их в современный формат WEBP, а также самостоятельно подключает результат к HTML и CSS файлам. Собирает в один несколько JavaScript файлов с помощью WEBPACK, оптимизирует и сжимает их. Есть возможность работать в синтаксисе ES6. Умеет создавать SVG спрайты.

Возможно есть вещи, без которых можно было бы легко обойтись, но я пытался показать максимум своих навыков при выполнении задания.

## Инструкция по установке
### Node.js
Для работы gulp потребуется node.js, скачать его можно здесь
https://nodejs.org/en/

### Gulp
В консоли переходим в папку проекта и приписываем
````
npm install
````

Далее прописываем
````
npm i webp-converter@2.2.3 --save-exact
````

Теперь все необходимые пакеты установлены и можно запускать сборщик командой
````
gulp
````

Ждем завершения всех процессов.

Вся готовая верстка находится в папке __/dist__

const { log } = require("console");
const path = require("path");

console.log("Склейка участков пути", path.join("first", "second", "third"));
console.log("Склейка участков пути", path.join(__dirname, ".."));
console.log("Склейка участков пути", path.join(__filename));

console.log(
  "Получить абсолютный путь",
  path.resolve(__dirname, "first", "second", "third")
);
const fullpath = path.resolve(__dirname, "first", "second", "third.js");

console.log("Парсинг пути", path.parse(fullpath));
console.log("Разделитель в ОС", path.sep);
console.log("Проверка на абсолютный путь", path.isAbsolute("first/second"));
console.log("Название файла", path.basename(fullpath));
console.log("Расширение файла", path.extname(fullpath));

/* ------------------------------------- */

const siteUrl = "http://localhost:8080/users?id=5123";
const url = new URL(siteUrl);

console.log(url);

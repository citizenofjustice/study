/**
 * Readable - чтение
 * Writeable - запись
 * Duplex - Для чтения и записи Readable + Writable
 * Transform - Такой же как Duplex, но может изменить данные по мере чтения
 */

const fs = require("fs");
const path = require("path");

/* --- чтение файла целиком --- */
// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// /* --- чтение файла по частям --- */
// /* --- Один chunk по дефолту 64 Кб --- */
// const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => console.log("Закончили читать"));
// stream.on("open", () => console.log("Начали читать"));
// stream.on("error", (err) => console.log(err));

/* --- запись в файл по частям --- */
// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "test2.txt")
// );
// for (let i = 0; i < 20; i++) {
//   writableStream.write(i + "\n");
// }

// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on("error");

const http = require("http");

http.createServer((req, res) => {
  // req - readable stream
  // res - writeable streab
  const stream = fs.createReadStream(path.resolve(__dirname), "test.txt");

  // Стрим закончит читать раньше чем пользователь скачает
  // stream.on("data", (chunk) => res.write(chunk));
  // stream.on("end", (chunk) => res.end());

  stream.pipe(res);
});

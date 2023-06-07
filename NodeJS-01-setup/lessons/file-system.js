const fs = require("fs");
const path = require("path");

/* --- создаем папку --- */
// fs.mkdirSync(path.resolve(__dirname, "dir1", "dir2", "dir3"), {
//   recursive: true, // позволяет создавать вложенные папки рекурсивно
// });

// console.log("START");

/* --- отлов ошибок --- */
// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Папка создана");
// });

// console.log("END");

/* --- удаление папки --- */
// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

/* --- создание и запись в файл (перезаписывает) --- */
/* --- реализация с коллбеками --- */
// fs.writeFile(path.resolve(__dirname, "test.txt"), "5 qwerty 7 9 10", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Файл записан");

//   /* --- добавлени в конец файла --- */
//   fs.appendFile(
//     path.resolve(__dirname, "test.txt"),
//     "добавили в конец",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("Файл дополнен");
//     }
//   );
// });

// const writeFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.writeFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     })
//   );
// };
// const appendFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.appendFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     })
//   );
// };

// const readFileAsync = async (path) => {
//   return new Promise((resolve, reject) =>
//     fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve(data);
//     })
//   );
// };

// const removeFileAsync = async (path) => {
//   return new Promise((resolve, reject) =>
//     fs.rm(path, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     })
//   );
// };

// /* --- реализация с асинхронного вызова функций --- */
// writeFileAsync(path.resolve(__dirname, "test.txt"), "data")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "578"))
//   .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

/* --- удаление файла --- */
// removeFileAsync(path.resolve(__dirname, "test.txt")).then(() =>
//   console.log("file was removed")
// );

/**
 * Через переменную окружения передать строку, записать ее в файл
 * прочитать файл, посчитать кол-во слов в файле и записать
 * их в новый файл count.txt, затем удалить первый файл
 */

const sourceText = process.env.TASK || "";

const writeFileTask = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err.message);
      }
      resolve(path);
    })
  );
};

const readFileTask = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    })
  );
};

const countAsync = async (data) => {
  return new Promise((resolve, reject) => {
    resolve("Количество слов: " + wordCount(data).toString());
  });
};

const wordCount = (str) => {
  return str.split(" ").filter((n) => n != "").length;
};

const removeFileTask = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        reject(err.message);
      }
      resolve();
    })
  );
};

writeFileTask(path.resolve(__dirname, "task.txt"), sourceText)
  .then((path) => readFileTask(path))
  .then((data) => countAsync(data))
  .then((countResult) =>
    writeFileTask(path.resolve(__dirname, "count.txt"), countResult)
  )
  .then(() => removeFileTask(path.resolve(__dirname, "task.txt")))
  .catch((err) => console.log(err)); // cross-env TASK="1 2 3 4 5 6 test" node ./lessons/file-system.js

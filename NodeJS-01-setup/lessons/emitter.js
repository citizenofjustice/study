/**
 * Когда удобно использовать?
 * http
 * websockets
 * long pulling
 * clusters
 */
const Emitter = require("events");
const emitter = new Emitter();

emitter.on("message", (data, second, third) => {
  console.log("Вы прислали сообщение" + data);
  console.log("Второй аргумент" + second);
});

const MESSAGE = process.env.message || "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "Вы не указали сообщение");
}

// /* --- пример если нужно вызвать только once --- */
// const callback = (data, second, third) => {
//   console.log("Вы прислали сообщение" + data);
//   console.log("Второй аргумент" + second);
// };

// emitter.once("message", callback);

// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");
// emitter.emit("message");

// /* --- удаление listener'ов --- */
// emitter.removeAllListeners();
// emitter.removeListener("message", callback);

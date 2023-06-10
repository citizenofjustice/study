const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

const userRouter = require("./src/user-router");
const Application = require("./framework/Application");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");

const app = new Application();

app.use(jsonParser);
app.use(parseUrl("http://localhost:5000"));
app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://brokenswords21:5l1CuwqcVzL16w0a@cluster0-nodejs-demo.o0ghxht.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

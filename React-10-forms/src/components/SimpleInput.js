import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEMail, setEnteredEMail] = useState("");
  const [enteredEMailTouched, setEnteredEMailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const eMailRegex = /.+@.+/g;
  const enteredEMailIsValid =
    enteredEMail.trim() !== "" && eMailRegex.test(enteredEMail);

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const eMailInputIsInvalid = !enteredEMailIsValid && enteredEMailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEMailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlureHandler = () => {
    setEnteredNameTouched(true);
  };

  const eMailInputChangeHandler = (event) => {
    setEnteredEMail(event.target.value);
  };

  const eMailInputBlureHandler = () => {
    setEnteredEMailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEMailTouched(true);

    if (!enteredNameIsValid || !enteredEMailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEMail);

    setEnteredName("");
    setEnteredEMail("");
    setEnteredNameTouched(false);
    setEnteredEMailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlureHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must be not empty</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={eMailInputChangeHandler}
          onBlur={eMailInputBlureHandler}
          value={enteredEMail}
        />
        {eMailInputIsInvalid && (
          <p className="error-text">E-mail adress is invalid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

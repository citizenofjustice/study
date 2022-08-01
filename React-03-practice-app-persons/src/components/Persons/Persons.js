import React from "react";
import PersonsInput from "./PersonsInput.js";
import PersonsOutput from "./PersonsOutput.js";

import styles from "./Persons.module.css";

const Persons = () => {

    return (
        <div>
            <PersonsInput />
            <PersonsOutput />
        </div>
    );
};

export default Persons;
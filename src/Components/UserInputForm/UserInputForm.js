import React, { useState } from "react";
import styled from "styled-components";

import ErrorModal from "../ErrorModal/ErrorModal";

const FormContainer = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 5px;
  }
  label {
    margin-bottom: 1rem;
  }
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 8px;
  display: inline-block;
  padding: 5px;
  font-size: 0.8rem;
  cursor: pointer;
`;

const UserInputForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { addUser } = props;

  const clearErrorMsgAndInputFields = () => {
    setErrorMessage("");
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedAge = age.trim();
    const intAge = Number(trimmedAge);
    console.log(trimmedUsername.length !== 0 && trimmedAge.length !== 0);
    if (trimmedUsername.length === 0 && trimmedAge.length === 0) {
      setErrorMessage("Username and age fields can't be empty!");
    } else if (trimmedUsername.length === 0 && trimmedAge.length !== 0) {
      setErrorMessage("username field can't be empty!");
    } else if (trimmedUsername.length !== 0 && trimmedAge.length === 0) {
      setErrorMessage("age field can't be empty!");
    } else if (trimmedUsername.length !== 0 && trimmedAge.length !== 0) {
      if (intAge < 0) {
        setErrorMessage("age can't be less than 0!");
      } else if (intAge === 0) {
        setErrorMessage("age can't be 0!");
      } else {
        clearErrorMsgAndInputFields();
        const userData = {
          username,
          age: Number(age),
        };
        addUser(userData);
      }
    }
  };

  return (
    <>
      {errorMessage.length > 0 && (
        <ErrorModal
          errorMessage={errorMessage}
          clearErrorMsgAndInputFields={clearErrorMsgAndInputFields}
        />
      )}
      <FormContainer>
        <form onSubmit={submitHandler}>
          <FormControl>
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="form-input"
              value={username}
              onChange={usernameChangeHandler}
              type="text"
            />
          </FormControl>
          <FormControl>
            <label className="form-label" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              className="form-input"
              value={age}
              onChange={ageChangeHandler}
              type="number"
              step={1}
            />
          </FormControl>
          <Button type="submit">Add User</Button>
        </form>
      </FormContainer>
    </>
  );
};

export default UserInputForm;

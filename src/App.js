import React, { useState } from "react";
import UserInputForm from "./Components/UserInputForm/UserInputForm";
import UserList from "./Components/UserList/UserList";
// import ErrorModal from "./Components/ErrorModal/ErrorModal";
import "./App.css";

function App() {
  const [userList, setuserList] = useState([]);

  const addUser = (user) => {
    setuserList((prev) => [user, ...prev]);
  };

  return (
    <div className="container">
      <UserInputForm addUser={addUser} />
      <UserList userList={userList}/>
    </div>
  );
}

export default App;

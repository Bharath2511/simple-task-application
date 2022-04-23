import React from "react";
import styled from "styled-components";

const UserListContainer = styled.ul`
    display: ${(props) => (props.isListEmpty ? "none" : "block")};
    list-style-type: none;
    text-deoration: none;
    padding: 20px;
    background-color: #fff;
    width: 50%;
.user-list-item {
    list-style-type: none;
    padding:5px;
    border: 1px solid black;
margin-bottom: 10px;
    }
`;

const UserList = (props) => {
  const { userList } = props;
  return (
    <UserListContainer isListEmpty={userList.length === 0 ? true : false}>
      {userList.map((user) => (
        <li className="user-list-item">{`${user.username} (${user.age} years old))`}</li>
      ))}
    </UserListContainer>
  );
};

export default UserList;

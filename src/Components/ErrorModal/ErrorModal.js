import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  display: ${(props) => (props.showModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const ModalBox = styled.div`
  border-radius: 8px;
  overflow:hidden;
  width: 40%;
  height: 100px;
  display: flex;
  flex-direction: column;
  .modal-header {
    color: #fff;
    background-color: violet;
    padding: 0.8rem;
  }
  .modal-body {
    padding: 0.8rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow:1;
  }
`;

const ModalBtn = styled.button`
  background-color: violet;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  align-self: flex-end;
`;

const ErrorModal = (props) => {
  const { errorMessage, clearErrorMsgAndInputFields } = props;
  const cancelHandler = () => {
    clearErrorMsgAndInputFields();
  };
  const onModalClick = () => {
    clearErrorMsgAndInputFields();
  };
  return (
    <ModalContainer
      onClick={onModalClick}
      showModal={errorMessage === "" ? false : true}
    >
      <ModalBox>
        <div className="modal-header">invalid Input</div>
        <div className="modal-body">
          <p>{errorMessage}</p>
          <ModalBtn type="button" onClick={cancelHandler}>
            Okay
          </ModalBtn>
        </div>
      </ModalBox>
    </ModalContainer>
  );
};

export default ErrorModal;

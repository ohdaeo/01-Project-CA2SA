import styled from "@emotion/styled";

export const JoinPageWrap = styled.div``;
export const JoinPageTopArea = styled.div`
  display: flex;
`;
export const JoinPageTopBackOff = styled.div``;
export const JoinPageTopText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  padding-left: 260px;
  margin-top: 10px;
`;

export const JoinPageMainWrap = styled.div``;

export const JoinPageTextArea = styled.div`
  p {
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 2px;
  }
  span {
    font-size: 20px;
    font-weight: 700;
    display: flex;
    padding-top: 50px;
  }
  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 300;
    padding-left: 10px;
    border-radius: 8px;
    border: 2px solid rgb(201, 201, 201);
    outline: none;
    transition: border-color 0.3s ease;
  }
  input:focus {
    border-color: #88c200;
  }
`;

export const JoinPageNickName = styled.div``;
export const JoinPageEmail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    width: 100%;
    padding-right: 100px;
    box-sizing: border-box;
  }

  button {
    position: absolute;
    border-radius: 8px;
    font-size: 12px;
    top: 37px;
    right: 10px;
    padding: 5px 10px;
    border: 2px solid rgb(201, 201, 201);
    outline: none;
    transition: border-color 0.3s ease;
  }
  button:focus {
    border-color: #88c200;
  }
  button:active {
    transform: translateY(0);
  }
`;
export const JoinPagePassword = styled.div`
  input {
  }
`;
export const JoinPageCheckArea = styled.div`
  padding-top: 70px;
`;
export const ServiceCheckBox = styled.div`
  padding-top: 15px;
  span {
    padding-left: 10px;
  }
  input {
  }
`;
export const EssentialRadioBox = styled.div`
  padding-top: 15px;
  appearance: none;

  span {
    padding-left: 10px;
  }

  input {
    width: 14px;
    height: 14px;
    border: 1px solid #000;
    border-radius: 50%;

    appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: all 0.1s ease;

    &:checked {
      border-color: #88c200;
    }

    &:checked::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #88c200;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const ChoiceRadioBox = styled.div`
  padding-top: 10px;
  span {
    padding-left: 10px;
  }
  input {
    width: 14px;
    height: 14px;
    border: 1px solid #000;
    border-radius: 50%;
    appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: all 0.1s ease;

    &:checked {
      border-color: #88c200;
    }

    &:checked::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: #88c200;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const JoinPageMoveNext = styled.div`
  padding-top: 10px;

  button {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: 0px solid rgb(201, 201, 201);
    outline: none;
    background-color: #afe799;
    color: #f5f5f5;
    font-size: 18px;
    font-weight: 700;
    cursor: not-allowed;
    transition: all 0.3s ease;

    &:not(:disabled) {
      background-color: #88c200;
      color: white;
      cursor: pointer;
    }

    &:hover:not(:disabled) {
      background-color: #76b000;
    }

    &:active:not(:disabled) {
      background-color: #699600;
      transform: scale(0.98);
    }
  }
`;

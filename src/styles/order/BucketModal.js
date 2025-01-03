import styled from "@emotion/styled";

export const BucketModalDiv = styled.div`
  position: fixed;
  width: 640px;
  height: 100%;
  left: 50%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateX(-50%);
  z-index: 999;
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    .container {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%);
      background-color: #fff;
      width: 400px;
      /* height: 200px; */
      margin: auto;
      padding: 30px;
      border-radius: 8px;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        .main {
          display: flex;
          justify-content: center;
          width: 100%;
          border-bottom: 1px solid var(--color-gray-100);

          padding: 5px 0 25px 0;
        }
        .sub {
          width: 100%;
          padding: 10px 10px 25px 10px;
          font-size: 14px;
          text-align: center;
          color: var(--color-gray-500);
        }
      }
      .button-box {
        display: flex;
        justify-content: space-around;
        gap: 20px;
        button {
          width: 200px;
        }
      }
    }
  }
`;
export const CancleButton = styled.button`
  background-color: #fff;
  color: var(--color-gray-500);
  padding: 10px 15px;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
  &:active {
    background-color: var(--color-gray-500);
    color: #fff;
    border: 1px solid var(--color-gray-500);
  }
`;

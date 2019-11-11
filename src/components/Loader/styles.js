import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
`;

export const BaseLoader = styled.div`
  width: 200px;
  height: 0px;
  border: 20px solid #f3f3f3;
  border-top: 20px solid #3498db;
  border-radius: 50%;
  animation: loading 0.2s linear infinite;
  background: white;
  margin: 100px auto;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    20% {
      border-top: 20px solid white;
    }
    20% {
      border-top: 20px solid pink;
    }
    50% {
      border-top: 20px solid red;
    }
    80% {
      border-top: 20px solid green;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

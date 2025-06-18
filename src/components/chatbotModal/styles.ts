import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 23, 42, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  background: #374151;

  color: #e2e8f0;

  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 650px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid #4a5568;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #374151;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5a667a;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #facc15;
  }

  h2 {
    color: white;
    margin: 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #4a5568;
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #94a3b8;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    color: #facc15;
    transform: rotate(90deg);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  border: 4px solid #4a5568;

  border-top: 4px solid #facc15;

  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 3rem auto;
`;

export const Content = styled.div`
  margin-top: 1.5rem;
  line-height: 1.7;
  white-space: pre-wrap;
  font-family: sans-serif;

  a {
    color: #facc15;
    text-decoration: underline;
    &:hover {
      color: #eab308;
    }
  }

  code {
    background-color: #1a202c;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    border-radius: 6px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff8a8a;
  background-color: rgba(255, 138, 138, 0.1);
  border: 1px solid #ff8a8a;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-top: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

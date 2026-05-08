import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: #e66767;
  display: flex;
  max-width: 800px;
  width: 90%;
  padding: 30px;
  position: relative;
`;

export const ModalImage = styled.img`
  width: 280px;
  min-width: 280px;
  object-fit: cover;
  display: block;
`;

export const ModalContent = styled.div`
  padding: 24px 24px 16px;
  display: flex;
  flex-direction: column;
`;

export const ModalNome = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 16px;
`;

export const ModalDescricao = styled.p`
  font-size: 14px;
  color: #ffffff;
  line-height: 1.65;
  margin: 0 0 16px;
  flex: 1;
  font-weight: 300;
`;

export const ModalPorcao = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin: 0 0 16px;
`;

export const AdicionarButton = styled.button`
  background: #FFEBD9;
  color: #e66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  font-family: inherit;
  padding: 10px 16px;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #e66767;
  color: #ffffff;
  border: none;
  font-size: 20px;
  font-family: inherit;
  cursor: pointer;
  padding: 4px 10px;
  line-height: 1;

  &:hover {
    opacity: 0.85;
  }
`;

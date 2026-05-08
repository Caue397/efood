import styled from "styled-components";

export const FormTitulo = styled.h2`
  color: #FFEBD9;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 24px;
`;

export const FormGrupo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const FormLabel = styled.label`
  color: #FFEBD9;
  font-size: 13px;
  font-weight: 700;
`;

export const FormInput = styled.input`
  background: #FFEBD9;
  border: none;
  padding: 8px 6px;
  font-size: 14px;
  font-family: inherit;
  color: #4b4b4b;
  width: 100%;
  outline: none;

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: -2px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const FormCampos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AvancarButton = styled.button`
  background: #FFEBD9;
  color: #e66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  font-family: inherit;
  padding: 12px;
  cursor: pointer;
  width: 100%;
  margin-top: 24px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const VoltarLink = styled.button`
  background: #FFEBD9;
  color: #e66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  font-family: inherit;
  padding: 12px;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export const ErroMsg = styled.p`
  color: #fff3f3;
  font-size: 13px;
  margin: 8px 0 0;
  background: rgba(0, 0, 0, 0.15);
  padding: 8px;
`;

import styled from "styled-components";

export const Card = styled.article`
  background: #e66767;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
  display: block;
`;

export const CardBody = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  flex: 1;
`;

export const ItemNome = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

export const Descricao = styled.p`
  font-size: 12px;
  color: #ffffff;
  line-height: 1.65;
  margin: 0;
  flex: 1;
  margin-top: 10px;
`;

export const AdicionarButton = styled.button`
  display: inline-block;
  color: #e66767;
  background: #FFEBD9;
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  width: 100%;
  text-align: center;
  align-self: flex-start;
  font-family: inherit;
  padding: 8px 16px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

import styled from "styled-components";

export const Card = styled.article`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
  display: block;
`;

export const BadgeDestaque = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #e66767;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const BadgeCategoria = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #e66767;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
`;

export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const PratoNome = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #4b4b4b;
  margin: 0;
`;

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #4b4b4b;
  flex-shrink: 0;
`;

export const Estrela = styled.span`
  color: #fedd00;
  font-size: 18px;
  line-height: 1;
`;

export const Descricao = styled.p`
  font-size: 13px;
  color: #9f9f9f;
  line-height: 1.65;
  margin: 0;
  flex: 1;
`;

export const SaibaMaisButton = styled.button`
  margin-top: 4px;
  padding: 10px 24px;
  border: 1.5px solid #e66767;
  color: #e66767;
  background: transparent;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;
  align-self: flex-start;
  font-family: inherit;

  &:hover {
    background-color: #e66767;
    color: #ffffff;
  }
`;

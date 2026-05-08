import styled from "styled-components";

export const Card = styled.article`
  background: #ffffff;
  border: 1px solid #E66767;
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

export const BadgeTipo = styled.span`
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
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const NomeRestaurante = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #e66767;
  margin: 0;
`;

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #e66767;
  flex-shrink: 0;
`;

export const Estrela = styled.span`
  color: #fedd00;
  font-size: 18px;
  line-height: 1;
`;

export const Descricao = styled.p`
  font-size: 12px;
  color: #e66767;
  line-height: 1.65;
  margin: 0;
  flex: 1;
  margin-top: 10px;
`;

export const SaibaMaisButton = styled.button`
  color: #ffffff;
  background: #e66767;
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  border-color: transparent;
  text-align: center;
  align-self: flex-start;
  font-family: inherit;
`;

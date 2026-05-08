import styled from "styled-components";

export const Hero = styled.section`
  background-image: url("/fundo.png");
  background-repeat: repeat;
  padding: 32px 24px 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const HeroLogo = styled.img`
  height: 48px;
  object-fit: contain;
`;

export const HeroTitulo = styled.h2`
  font-size: clamp(22px, 3.5vw, 36px);
  font-weight: 900;
  color: #e66767;
  margin: 0;
  margin-top: 100px;
  line-height: 1.4;
`;

export const MainSection = styled.section`
  background-color: #FFF8F2;
  padding: 56px 24px 80px;
`;

export const RestaurantesGrid = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

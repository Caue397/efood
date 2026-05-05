import { Link } from "react-router";
import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: #fff8f3;
  padding: 72px 24px 64px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 900;
  color: #e66767;
  margin: 0;
  line-height: 1.3;
`;

export const DestaqueSection = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #4b4b4b;
  margin: 0 0 32px;
  text-align: center;
`;

export const PratosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CtaSection = styled.section`
  text-align: center;
  padding: 48px 24px 0;
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  padding: 14px 44px;
  background-color: #e66767;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  transition: opacity 0.2s;
  font-family: inherit;

  &:hover {
    opacity: 0.85;
  }
`;

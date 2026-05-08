import { Link } from "react-router";
import styled from "styled-components";

export const PerfilHeader = styled.header`
  background-image: url("/fundo.png");
  background-repeat: repeat;
  border-bottom: 1px solid #e0e0e0;
`;

export const PerfilHeaderInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: #e66767;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 40px;
  object-fit: contain;
`;

export const CartInfo = styled.span`
  color: #e66767;
  font-size: 14px;
  font-weight: 600;
  background: none;
  border: none;
  font-family: inherit;
  cursor: pointer;
  padding: 0;
`;

export const HeroCapa = styled.section<{ $src: string }>`
  height: 300px;
  background-image: url(${(p) => p.$src});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: stretch;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 60%);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 24px 32px;
`;

export const HeroTipo = styled.p`
  font-size: 40px;
  font-weight: 200;
  color: #ffffff;
  margin: 0 0 8px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
`;

export const HeroNome = styled.h1`
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

export const MenuSection = styled.section`
  background-color: #fff8f2;
  padding: 56px 24px 80px;
`;

export const MenuGrid = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

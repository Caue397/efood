import { Link } from "react-router";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #fff8f3;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoImage = styled.img`
  height: 40px;
  width: 40px;
  object-fit: contain;
`;

export const LogoText = styled.span`
  font-size: 22px;
  font-weight: 900;
  color: #e66767;
  letter-spacing: -0.5px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 28px;
`;

interface NavLinkProps {
  $active: boolean;
}

export const NavLink = styled(Link)<NavLinkProps>`
  color: ${(p) => (p.$active ? "#e66767" : "#4b4b4b")};
  text-decoration: none;
  font-size: 14px;
  font-weight: ${(p) => (p.$active ? "700" : "500")};
  transition: color 0.2s;

  &:hover {
    color: #e66767;
  }
`;

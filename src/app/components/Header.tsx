import { useLocation } from "react-router";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  LogoImage,
  LogoText,
  Nav,
  NavLink,
} from "./Header.styles";

export function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo to="/">
          <LogoImage src="/icon.png" alt="MyFood" />
          <LogoText>MyFood</LogoText>
        </Logo>
        <Nav>
          <NavLink to="/" $active={pathname === "/"}>
            Início
          </NavLink>
          <NavLink to="/cardapio" $active={pathname === "/cardapio"}>
            Cardápio
          </NavLink>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
}

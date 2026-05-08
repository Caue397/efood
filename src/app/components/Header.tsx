import { HeaderWrapper, HeaderInner, Logo, LogoImage } from "./Header.styles";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo to="/">
          <LogoImage src="/logo.png" alt="efood" />
        </Logo>
      </HeaderInner>
    </HeaderWrapper>
  );
}

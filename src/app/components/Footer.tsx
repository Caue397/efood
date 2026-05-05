import {
  FooterWrapper,
  FooterInner,
  FooterLogoWrapper,
  FooterLogoImage,
  FooterLogoText,
  SocialRow,
  SocialIcon,
  FooterText,
} from "./Footer.styles";

export function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterLogoWrapper>
          <FooterLogoImage src="/icon.png" alt="MyFood" />
          <FooterLogoText>MyFood</FooterLogoText>
        </FooterLogoWrapper>
        <SocialRow>
          <SocialIcon href="#" aria-label="Instagram">
            @
          </SocialIcon>
          <SocialIcon href="#" aria-label="Facebook">
            f
          </SocialIcon>
          <SocialIcon href="#" aria-label="X / Twitter">
            𝕏
          </SocialIcon>
        </SocialRow>
        <FooterText>
          A MyFood é uma plataforma para divulgação de estabelecimentos; a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </FooterText>
      </FooterInner>
    </FooterWrapper>
  );
}

import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #FFEBD9;
  padding: 48px 24px 40px;
`;

export const FooterInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const FooterLogo = styled.img`
  height: 44px;
  object-fit: contain;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialIcon = styled.a`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E66767;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.65;
  }
`;

export const FooterText = styled.p`
  color: #E66767;
  font-size: 11px;
  text-align: center;
  max-width: 560px;
  line-height: 1.7;
  margin: 0;
  margin-top: 25px
`;

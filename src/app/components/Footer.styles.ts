import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #4b4b4b;
  padding: 48px 24px 40px;
  margin-top: 80px;
`;

export const FooterInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FooterLogoImage = styled.img`
  height: 44px;
  width: 44px;
  object-fit: contain;
`;

export const FooterLogoText = styled.span`
  font-size: 26px;
  font-weight: 900;
  color: #fff8f3;
  letter-spacing: -0.5px;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialIcon = styled.a`
  width: 38px;
  height: 38px;
  border: 1.5px solid #fff8f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff8f3;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.2s;
  line-height: 1;

  &:hover {
    opacity: 0.65;
  }
`;

export const FooterText = styled.p`
  color: #9f9f9f;
  font-size: 11px;
  text-align: center;
  max-width: 560px;
  line-height: 1.7;
  margin: 0;
`;

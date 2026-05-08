import { Link } from "react-router";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #fff8f2;
  border-bottom: 1px solid #e0e0e0;
`;

export const HeaderInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Link)`
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 40px;
  object-fit: contain;
`;

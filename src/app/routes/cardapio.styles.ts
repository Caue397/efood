import styled from "styled-components";

export const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 900;
  color: #4b4b4b;
  margin: 0 0 32px;
  text-align: center;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

interface FilterButtonProps {
  $active: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 8px 22px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 1.5px solid ${(p) => (p.$active ? "#e66767" : "#e0e0e0")};
  background-color: ${(p) => (p.$active ? "#e66767" : "transparent")};
  color: ${(p) => (p.$active ? "#ffffff" : "#4b4b4b")};
  font-family: inherit;

  &:hover {
    border-color: #e66767;
    color: ${(p) => (p.$active ? "#ffffff" : "#e66767")};
  }
`;

export const PratosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: #9f9f9f;
  font-size: 15px;
  grid-column: 1 / -1;
  padding: 40px 0;
`;

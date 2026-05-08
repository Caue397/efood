import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 900;
`;

export const Panel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 380px;
  background: #e66767;
  z-index: 901;
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PanelTitulo = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const FecharButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 22px;
  cursor: pointer;
  line-height: 1;
  padding: 0;

  &:hover {
    opacity: 0.75;
  }
`;

export const Lista = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemRow = styled.li`
  display: flex;
  gap: 12px;
  background: #FFEBD9;
  padding: 10px;
  position: relative;
`;

export const ItemImagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4px;
`;

export const ItemNome = styled.span`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  color: #E66767;
`;

export const ItemPreco = styled.span`
  color: #ffffff;
  font-size: 13px;
  color: #E66767;
`;

export const RemoverButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const Rodape = styled.div`
  margin-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;

export const FinalizarButton = styled.button`
  background: #ffffff;
  color: #e66767;
  border: none;
  font-size: 14px;
  font-weight: 700;
  font-family: inherit;
  padding: 12px;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export const CarrinhoVazio = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
  margin-top: 32px;
`;
